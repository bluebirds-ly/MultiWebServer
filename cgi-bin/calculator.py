def run(args):
    print(args)
    a = int(args["num1"][0])
    op = args["op"][0]
    b = int(args["num2"][0])
    if op == "+":
        res = a + b
    elif op == "-":
        res = a - b
    elif op == "*":
        res = a * b
    elif op == "/":
        res = a / b
    elif op == "%":
        res = a % b


    html =    "<!DOCTYPE html>\n" \
            + "<html lang=\"en\">\n" \
            + "<head>\n" \
            + "    <meta charset=\"UTF-8\">\n" \
            + "    <title>Calculator</title>\n" \
            + "    <style>\n" \
            + "        body{\n" \
            + "            background-image: url(\"../pics/calculator_pic.jpg\");\n" \
            + "            background-size: cover;\n" \
            + "        }\n" \
            + "    </style>\n" \
            + "<body>\n" \
            + "<h1 style=\"font-size: 80px;text-align:center;color:black\">\n" \
            + "        Calculator\n" \
            + "</h1>\n" \
            + "<form style=\"position:fixed;top:250px;left:550px;font-size:40px\">\n" \
            + "    num1 : %d<br>\n" %a \
            + "    op&nbsp&nbsp&nbsp&nbsp&nbsp : %s<br>\n" %op \
            + "    num2 : %d<br>\n" %b \
            + "    ans&nbsp&nbsp&nbsp&nbsp&nbsp: %d<br>\n" %res \
            + "</form>\n" \
            + "</body>\n" \
            + "</html>\n"
    return html