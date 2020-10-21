import socket
import time
import importlib
from io import BytesIO
from concurrent.futures import ThreadPoolExecutor, as_completed
from http.server import BaseHTTPRequestHandler

IP = "127.0.0.1"
PORT = 8888
MAX_CONNECTIONS = 20


class HTTPRequest(BaseHTTPRequestHandler):
    def __init__(self, request_text):
        self.rfile = BytesIO(request_text)
        self.raw_requestline = self.rfile.readline()
        self.error_code = self.error_message = self.explain = None
        self.parse_request()

    def send_error(self, code, message=None, explain=None):
        self.error_code = code
        self.error_message = message
        self.explain = explain


def parse_request(conn, addr):
    request_bytes = conn.recv(1024)
    request_data = HTTPRequest(request_bytes)
    request_body = request_bytes.decode("utf-8").split("\r\n\r\n")[1]
    print("-----request begin-----")
    print(request_data.error_code)
    print(request_data.command)
    print(request_data.path)
    print(request_data.request_version)
    request_headers = request_data.headers
    for key in request_headers:
        print(key + " : " + request_headers[key])
    print(request_body)
    print("-----request end-----")

    file_name = request_data.path.lstrip("/").split("?")[0]

    if request_data.command == "POST":
        args = request_body
    elif request_data.command == "GET":
        if "?" in request_data.path:
            args = request_data.path.split("?")[1]
        else:
            args = ""
    else:
        args = ""

    if args:
        args = args.split("&")
        args = {arg.split("=")[0]: arg.split("=")[1] for arg in args}
    else:
        args = {}

    response_body = ""
    status_code = "200 OK"
    if file_name.startswith("cgi-bin/"):
        if file_name.endswith(".py"):
            module = file_name.lstrip("cgi-bin/").rstrip(".py")
            pybin = importlib.import_module('.' + module, package="cgi-bin")
            response_body = pybin.run(args).encode("utf-8")
    else:
        try:
            with open(file_name, "rb") as file:
                response_body = file.read()
            status_code = "200 OK"
        except FileNotFoundError:
            with open("404.html", "rb") as file:
                response_body = file.read()
            status_code = "404 Not Found"

    response_status_line = "HTTP/1.0 {}\r\n".format(status_code)
    date = "Date: {} GMT\r\n".format(time.asctime())
    content_length = "Content-Length: {}\r\n".format(len(response_body))
    connection = "Connection: close\r\n"
    content_type = "Content-Type: text/html; charset=UTF-8\r\n"
    response_headers = date + content_length + connection + content_type

    # conn.sendall(response_status_line.encode("utf-8"))
    # conn.sendall(response_headers.encode("utf-8"))
    # conn.sendall("\r\n")
    # conn.sendall(response_body)
    response = response_status_line.encode("utf-8") + response_headers.encode("utf-8") \
        + "\r\n".encode("utf-8") + response_body
    conn.sendall(response)
    print("-----response begin-----")
    print(response.decode("utf-8"))
    print("-----response end-----")
    # print(response_status_line)
    # print(response_headers)
    # print("\r\n")
    # print(response_body)
    conn.close()


def main():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind((IP, PORT))
    sock.listen()

    # conn, addr = sock.accept()
    # parse_request(conn, addr)
    with ThreadPoolExecutor(max_workers=MAX_CONNECTIONS) as executor:
        while True:
            conn, addr = sock.accept()
            task = executor.submit(parse_request, conn, addr)
            # task.add_done_callback()
            # print(task.result())


if __name__ == '__main__':
    main()
