import pymysql
from pymysql.cursors import DictCursor


def run(args):
    conn = pymysql.connect(host="localhost", port=3306, user="root", passwd="123", db="StudentInfo", charset="utf8")
    cur = conn.cursor()
    cur.execute("SELECT VERSION()")
    data = cur.fetchone()
    print("Database version : %s" % data)

    if args.get("StudentID") == None:
        StudentID = None
    else:
        StudentID = int(args["StudentID"][0])

    if args.get("StudentName") == None:
        StudentName = None
    else:
        StudentName = args["StudentName"][0]

    if args.get("Class") == None:
        Class = None
    else:
        Class = args["Class"][0]

    op = args["op"][0]

    preHtml = "<!DOCTYPE html>\n" \
              + "<html lang=\"en\">\n" \
              + "<head>\n" \
              + "    <meta charset=\"UTF-8\">\n" \
              + "    <title>Query</title>\n" \
              + "    <style>\n" \
              + "        body{\n" \
              + "            background-image: url(\"../pics/query_pic.jpg\");\n" \
              + "            background-size: cover;\n" \
              + "        }\n" \
              + "        table{\n" \
              + "            border-collapse: collapse;\n" \
              + "            text-align: center;\n" \
              + "        }\n" \
              + "        .td{\n" \
              + "            width: 250px;\n" \
              + "        }\n" \
              + "        h2 {\n" \
              + "            text-align: center;\n" \
              + "            font-size: 40px;\n" \
              + "        }\n" \
              + "    </style>\n" \
              + "</head>\n" \
              + "<body>\n" \
              + "    <h1 style=\"font-size: 80px;text-align:center;color:black\">\n" \
              + "        Query\n" \
              + "    </h1>\n"

    tailHtml = "</body>\n" \
               + "</html>\n"

    insertsql = "INSERT INTO Student(StudentID, StudentName, Class)VALUES ( %d , '%s',  '%s' );" % (
    StudentID, StudentName, Class)
    deletesql = "DELETE FROM Student WHERE StudentID = %d;" % (StudentID)
    querysql = "SELECT * FROM Student WHERE StudentID = %d;" % (StudentID)
    showallsql = "SELECT * FROM Student;"

    if op == "Insert":
        cur.execute(querysql)  # 插入前先判断是否存在
        results = cur.fetchall()
        rowcount = 0
        for row in results:
            rowcount += 1
            stuid = row[0]
            stuname = row[1]
            stuclass = row[2]
        if rowcount > 0:
            existedhtml = "    <h2>该ID学生信息已经存在！信息如下</h2>\n" \
                          + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                          + "        <table align=\"center\" border=\"1px\">\n" \
                          + "            <tr>\n" \
                          + "                <th>Student ID</th>\n" \
                          + "                <th>Student Name</th>\n" \
                          + "                <th>Class</th>\n" \
                          + "            </tr>\n" \
                          + "            <tr>\n" \
                          + "                <td class=\"td\">%d</td>\n" % stuid \
                          + "                <td class=\"td\">%s</td>\n" % stuname \
                          + "                <td class=\"td\">%s</td>\n" % stuclass \
                          + "            </tr>\n" \
                          + "        </table>\n" \
                          + "    </form>\n"
            html = preHtml + existedhtml + tailHtml
        else:
            cur.execute(insertsql)
            conn.commit()
            inserthtml = "    <h2>学生信息插入成功！信息如下</h2>\n" \
                         + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                         + "        <table align=\"center\" border=\"1px\">\n" \
                         + "            <tr>\n" \
                         + "                <th>Student ID</th>\n" \
                         + "                <th>Student Name</th>\n" \
                         + "                <th>Class</th>\n" \
                         + "            </tr>\n" \
                         + "            <tr>\n" \
                         + "                <td class=\"td\">%d</td>\n" % StudentID \
                         + "                <td class=\"td\">%s</td>\n" % StudentName \
                         + "                <td class=\"td\">%s</td>\n" % Class \
                         + "            </tr>\n" \
                         + "        </table>\n" \
                         + "    </form>\n"
            html = preHtml + inserthtml + tailHtml
    elif op == "Delete":
        cur.execute(querysql)  # 删除前先判断是否存在
        results = cur.fetchall()
        rowcount = 0
        for row in results:
            rowcount += 1
            stuid = row[0]
            stuname = row[1]
            stuclass = row[2]
        if rowcount == 0:
            notexistedhtml = "    <h2>该ID学生信息不存在！</h2>\n" \
                             + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                             + "        <table align=\"center\" border=\"1px\">\n" \
                             + "            <tr>\n" \
                             + "                <th>Student ID</th>\n" \
                             + "                <th>Student Name</th>\n" \
                             + "                <th>Class</th>\n" \
                             + "            </tr>\n" \
                             + "            <tr>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "            </tr>\n" \
                             + "        </table>\n" \
                             + "    </form>\n"
            html = preHtml + notexistedhtml + tailHtml
        else:
            cur.execute(deletesql)
            conn.commit()
            deletehtml = "    <h2>学生信息删除成功！信息如下</h2>\n" \
                         + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                         + "        <table align=\"center\" border=\"1px\">\n" \
                         + "            <tr>\n" \
                         + "                <th>Student ID</th>\n" \
                         + "                <th>Student Name</th>\n" \
                         + "                <th>Class</th>\n" \
                         + "            </tr>\n" \
                         + "            <tr>\n" \
                         + "                <td class=\"td\">%d</td>\n" % stuid \
                         + "                <td class=\"td\">%s</td>\n" % stuname \
                         + "                <td class=\"td\">%s</td>\n" % stuclass \
                         + "            </tr>\n" \
                         + "        </table>\n" \
                         + "    </form>\n"
            html = preHtml + deletehtml + tailHtml
    elif op == "Query":
        cur.execute(querysql)  # 查询判断是否存在
        results = cur.fetchall()
        rowcount = 0
        for row in results:
            rowcount += 1
            stuid = row[0]
            stuname = row[1]
            stuclass = row[2]
        if rowcount == 0:
            notexistedhtml = "    <h2>该ID学生信息不存在！</h2>\n" \
                             + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                             + "        <table align=\"center\" border=\"1px\">\n" \
                             + "            <tr>\n" \
                             + "                <th>Student ID</th>\n" \
                             + "                <th>Student Name</th>\n" \
                             + "                <th>Class</th>\n" \
                             + "            </tr>\n" \
                             + "            <tr>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "            </tr>\n" \
                             + "        </table>\n" \
                             + "    </form>\n"
            html = preHtml + notexistedhtml + tailHtml
        else:
            queryhtml = "    <h2>学生信息查询成功！信息如下</h2>\n" \
                        + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                        + "        <table align=\"center\" border=\"1px\">\n" \
                        + "            <tr>\n" \
                        + "                <th>Student ID</th>\n" \
                        + "                <th>Student Name</th>\n" \
                        + "                <th>Class</th>\n" \
                        + "            </tr>\n" \
                        + "            <tr>\n" \
                        + "                <td class=\"td\">%d</td>\n" % stuid \
                        + "                <td class=\"td\">%s</td>\n" % stuname \
                        + "                <td class=\"td\">%s</td>\n" % stuclass \
                        + "            </tr>\n" \
                        + "        </table>\n" \
                        + "    </form>\n"
            html = preHtml + queryhtml + tailHtml
    elif op == "ShowAll":
        # print(op)
        cur.execute(showallsql)
        results = cur.fetchall()  # 获取全部结果
        rowcount = 0
        tablehtml = "    <h2>学生信息查询成功！信息如下</h2>\n" \
                    + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                    + "        <table align=\"center\" border=\"1px\">\n" \
                    + "            <tr>\n" \
                    + "                <th>Student ID</th>\n" \
                    + "                <th>Student Name</th>\n" \
                    + "                <th>Class</th>\n" \
                    + "            </tr>\n"
        for row in results:
            rowcount += 1
            stuid = row[0]
            stuname = row[1]
            stuclass = row[2]
            tablehtml += "            <tr>\n" \
                         + "                <td class=\"td\">%d</td>\n" % stuid \
                         + "                <td class=\"td\">%s</td>\n" % stuname \
                         + "                <td class=\"td\">%s</td>\n" % stuclass \
                         + "            </tr>\n"
        tablehtml += "        </table>\n" \
                     + "    </form>\n"

        if rowcount == 0:  # 如果有结果
            notexistedhtml = "    <h2>无任何学生信息！</h2>\n" \
                             + "    <form name=\"input\" style=\"font-size:40px;\">\n" \
                             + "        <table align=\"center\" border=\"1px\">\n" \
                             + "            <tr>\n" \
                             + "                <th>Student ID</th>\n" \
                             + "                <th>Student Name</th>\n" \
                             + "                <th>Class</th>\n" \
                             + "            </tr>\n" \
                             + "            <tr>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "                <td class=\"td\">---</td>\n" \
                             + "            </tr>\n" \
                             + "        </table>\n" \
                             + "    </form>\n"
            html = preHtml + notexistedhtml + tailHtml
        else:
            html = preHtml + tablehtml + tailHtml
    conn.close()
    return html