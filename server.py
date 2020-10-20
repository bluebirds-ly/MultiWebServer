import socket
from concurrent.futures import ThreadPoolExecutor, as_completed
from http.server import BaseHTTPRequestHandler
from io import BytesIO


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
    request_str = conn.recv(1024)
    # print(request_str.decode("utf-8"))
    request_data = HTTPRequest(request_str)
    print(request_data.error_code)
    print(request_data.command)
    print(request_data.path)
    print(request_data.request_version)
    request_headers = request_data.headers
    for key in request_headers:
        print(key + " : " + request_headers[key])

    file_name = request_data.path.lstrip("/")

    response_body = ""
    with open(file_name, "rb") as file:
        response_body = file.read()

    response_status_line = "HTTP/1.1 200 OK\r\n"
    response_headers = "Content-Type: text/html; charset=UTF-8\r\n" \
                       "Content-Length: %s\r\n" \
                       "Connection: close\r\n" % len(response_body)

    conn.send(response_status_line.encode("utf-8"))
    conn.send(response_headers.encode("utf-8"))
    conn.send("\r\n")
    conn.send(response_body)
    # conn.close()


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
            # print(task.result())


if __name__ == '__main__':
    main()
