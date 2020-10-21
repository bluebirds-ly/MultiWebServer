def run(args):
    a = int(args["num1"])
    b = int(args["num2"])
    res = a + b
    html = ("<!DOCTYPE html>\n"
            "<html lang=\"en\">\n"
            "<head>\n"
            "    <meta charset=\"UTF-8\">\n"
            "    <title>Calculator</title>\n"
            "</head>\n"
            "<body>\n"
            "    <p>{} + {} = {}</p>\n"
            "</body>\n"
            "</html>".format(a, b, res))
    return html
