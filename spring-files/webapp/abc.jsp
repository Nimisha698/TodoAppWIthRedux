<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="addEmployee">
Employee name: <input type=text name=empName value=empName>
<br>
Employee id: <input type=text name=empId value=empId>
<br>
<input type=submit name=submit value=submit>
</form>
<form action="deleteEmployee">
Employee name: <input type=text name=empName value=empName>
<br>
Employee id: <input type=text name=empId value=empId>
<br>
<input type=submit name=submit value=submit>
</form>
<form action="fetchEmployee">
Employee id: <input type=text name=empId value=empId>
<br>
<input type=submit name=submit value=submit>
</form>
</body>
</html>