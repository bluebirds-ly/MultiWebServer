import socket
import time
import importlib
import threading
import os
from io import BytesIO
from concurrent.futures import ThreadPoolExecutor, as_completed
from http.server import BaseHTTPRequestHandler
from urllib import parse as urllib_parse

IP = "127.0.0.1"
PORT = 8888
MAX_CONNECTIONS = 20
CRLF = "\r\n"
mu = threading.Lock()
visitor_id = 0


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

    urlres = urllib_parse.urlparse(request_data.path)
    file_name = urlres.path.lstrip("/")
    args = urllib_parse.parse_qs(urlres.query)
    if request_data.command == "POST":
        args = urllib_parse.parse_qs(request_body)

    # if request_data.command == "POST":
    #     args = request_body
    # elif request_data.command == "GET":
    #     if "?" in request_data.path:
    #         args = request_data.path.split("?")[1]
    #     else:
    #         args = ""
    # else:
    #     args = ""
    #
    # if args:
    #     args = args.split("&")
    #     args = {arg.split("=")[0]: arg.split("=")[1] for arg in args}
    # else:
    #     args = {}

    response_body = ""
    status_code = "200 OK"
    if file_name.startswith("cgi-bin/"):
        if file_name.endswith(".py"):
            module = file_name.replace("cgi-bin/", '').replace('.py', '')
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

    file_suffix = file_name.split(".")[-1]
    type_dict = {"html": "text/html",
                 "py": "text/html",
                 "css": "text/css",
                 "js": "application/javascript",
                 "php": "application/javascript",
                 "jpg": "image/jpeg",
                 "png": "image/png",
                 "gif": "image/gif",
                 }

    response_status_line = "HTTP/1.0 {}\r\n".format(status_code)
    date = "Date: {} GMT\r\n".format(time.asctime())
    content_length = "Content-Length: {}\r\n".format(len(response_body))
    connection = "Connection: close\r\n"
    content_type = "Content-Type: {}\r\n".format(type_dict[file_suffix])
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
    global visitor_id
    visitor_id += 1
    add_log(request_bytes, int(status_code.split()[0]), len(response_body), visitor_id, addr)


# 写日志文件_by_47
def add_log(data,status,size,visiter_id,addr):

    packet = data.decode('utf-8').split(CRLF)
    user = ''
    refer = ''
    for item in packet:
        if (item.split(':')[0] == 'User-Agent'):
            user = item
        if (item.split(':')[0] == 'Referer'):
            refer = item
    request = str(packet[0])
    logmsg = str(addr) + ' '
    logmsg += 'id: "' + str(visiter_id)+'"'
    logmsg += '--[' + str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())) + ']; '
    logmsg += request + '; ' + user + '; '
    if(status==200):
        logmsg += 'HTTP Status:200 OK; Size: "'+str(size)+'"'
    elif status==404:
        logmsg += 'HTTP Status:404 Not Found; '
    elif status==400:
        logmsg += 'HTTP Status:400 Bad Request; '

    if (len(refer) != 0):
        logmsg += '"' + refer + '"'
    if mu.acquire(True):  # 2、获取锁状态，一个线程有锁时，别的线程只能在外面等着
        if os.path.exists('server_log.txt'):
            fp = open('server_log.txt', 'a+')
        else:
            # os.system('server_log.txt')
            fp = open('server_log.txt', 'a+')
        try:
            fp.write(str(logmsg) + '\n')
        finally:
            fp.close()
            print('write log file finish!')
        mu.release()  # 3、释放锁
# end by_47


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
            # task.add_done_callback(add_log)
            # print(task.result())


if __name__ == '__main__':
    main()
