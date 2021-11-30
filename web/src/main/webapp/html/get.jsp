<%@page import="emp.empDAO"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>webapp/get.jsp</title>
</head>
<body>	
	<%
	// id, last, email, hire, job
	String id = request.getParameter("user_id");
	String name = request.getParameter("user_name");
	String email = request.getParameter("user_email");
	String hire = request.getParameter("user_hire");
	String job = request.getParameter("user_job");
	
	Map<String, String> map = new HashMap<String, String>();
	map.put("id", id);
	map.put("name", name);
	map.put("email", email);
	map.put("hire", hire);
	map.put("job", job);
	
	empDAO dao = new empDAO();
	//dao.insertEmp(map);
	
	out.println("end of prog");
	%>
</body>
</html>