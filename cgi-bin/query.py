import pymysql
from pymysql.cursors import DictCursor
def run(args):
    conn = pymysql.connect(host="localhost", port=3306, user="root", passwd="123", db="StudentInfo", charset="utf8")
    cur = conn.cursor()
    cur.execute("SELECT VERSION()")
    data = cur.fetchone()
    print("Database version : %s" % data)

    StudentID = int(args["StudentID"][0])
    StudentName = args["StudentName"][0]
    Class = args["Class"][0]
    op = args["op"][0]


    inserthtml = "<!DOCTYPE html>\n" \
               + "<html lang = \"zh\">\n" \
               + "<head>\n" \
               + '  <meta charset="utf-8">\n' \
               + '  <title>Calculator Result</title>\n' \
               + '</head>\n' \
               + '<body>\n' \
               + "  <h2> 成功插入学生数据：%s！</h2>\n" % StudentID \
               + "</body>\n" \
               + "</html>\n"

    deletehtml = "<!DOCTYPE html>\n" \
                 + "<html lang = \"zh\">\n" \
                 + "<head>\n" \
                 + '  <meta charset="utf-8">\n' \
                 + '  <title>Calculator Result</title>\n' \
                 + '</head>\n' \
                 + '<body>\n' \
                 + "  <h2> 成功删除学生数据：%s！</h2>\n" % StudentID \
                 + "</body>\n" \
                 + "</html>\n"

    notfoundhtml = "<!DOCTYPE html>\n" \
                 + "<html lang = \"zh\">\n" \
                 + "<head>\n" \
                 + '  <meta charset="utf-8">\n' \
                 + '  <title>Calculator Result</title>\n' \
                 + '</head>\n' \
                 + '<body>\n' \
                 + "  <h2> 学号为%s的学生不存在！</h2>\n" % StudentID \
                 + "</body>\n" \
                 + "</html>\n"
    existedhtml = "<!DOCTYPE html>\n" \
                 + "<html lang = \"zh\">\n" \
                 + "<head>\n" \
                 + '  <meta charset="utf-8">\n' \
                 + '  <title>Calculator Result</title>\n' \
                 + '</head>\n' \
                 + '<body>\n' \
                 + "  <h2> 学号为%s的学生已经存在了！</h2>\n" % StudentID \
                 + "</body>\n" \
                 + "</html>\n"

    insertsql = "INSERT INTO Student(StudentID, StudentName, Class)VALUES ( %d , '%s',  '%s' );"%(StudentID, StudentName, Class)
    deletesql = "DELETE FROM Student WHERE StudentID = %d;"%(StudentID)
    querysql = "SELECT * FROM Student WHERE StudentID = %d;"%(StudentID)
    if op == "Insert":
        cur.execute(querysql)      #插入前先判断是否存在
        results = cur.fetchall()
        rowcount = 0;
        for row in results:
            rowcount += 1
            stuid = row[0]
            stuname = row[1]
            stuclass = row[2]
        if rowcount > 0:
            html = existedhtml
            conn.close()
            return html
        cur.execute(insertsql)
        conn.commit()
        print("insert successful")
        html = inserthtml
    elif op == "Delete":
        cur.execute(deletesql)
        conn.commit()
        html = deletehtml
        print("delete successful")
    elif op == "Query":
        cur.execute(querysql)
        results = cur.fetchall()  #获取全部结果
        rowcount = 0;
        for row in results:
            rowcount += 1
            stuid = row[0]
            stuname = row[1]
            stuclass = row[2]
        if rowcount == 0:       #如果有结果
            html = notfoundhtml
        else :
            html = "<!DOCTYPE html>\n" \
                 + "<html lang = \"zh\">\n" \
                 + "<head>\n" \
                 + '  <meta charset="utf-8">\n' \
                 + '  <title>Calculator Result</title>\n' \
                 + '</head>\n' \
                 + '<body>\n' \
                 + "  <h2> 查询到的学生数据为：%d %s %s！</h2>\n" % (stuid, stuname, stuclass) \
                 + "</body>\n" \
                 + "</html>\n"

    conn.close()
    return html