def run(args):
    print(args)
    a = int(args["num1"][0])
    op = args["op"][0]
    b = int(args["num2"][0])
    if op == "+":
        res = a + b
    elif op == "-":
        res = a - b

    html =   "<!DOCTYPE html>\n" \
           + "<html lang = \"zh\">\n" \
           + "<head>\n" \
           + '  <meta charset="utf-8">\n' \
           + '  <title>Calculator Result</title>\n' \
           + '</head>\n' \
           + '<body>\n' \
           + "  <h2> 计算结果是：%s</h2>\n" % res \
           + "</body>\n" \
           + "</html>\n"
    return html
