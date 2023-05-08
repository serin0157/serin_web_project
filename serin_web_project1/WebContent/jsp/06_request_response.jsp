<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Login Form</h1>
	<form name="LoginForm" action="06_loginCheck.jsp" method="get">
		<ul>
			<li>
				<label>아이디</label>
				<input type="text" name="id">
			</li>
			<li>
				<label>패스워드</label>
				<input type="password" name="pass">
			</li>
			<li>
				<button type="submit">Login</button>
				<button type="reset">Cancel</button>
			</li>
		</ul>
	</form>
</body>
</html>