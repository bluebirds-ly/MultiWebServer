def run(args):
    a = int(args["num1"][0])
    b = int(args["num2"][0])
    html =   "<!DOCTYPE html>\n" \
           + "<html lang = \"zh\">\n" \
           + "<head>\n" \
           + '  <meta charset="utf-8">\n' \
           + '  <title>Calculator Result</title>\n' \
           + '</head>\n' \
           + '<body>\n' \
           + "  <h2> 计算结果是：%s</h2>\n" % (a+b) \
           + "</body>\n" \
           + "</html>\n"
    return html
