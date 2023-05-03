<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="http://localhost:9000/serin_web_project1/jquery/jquery-3.6.4.js"></script>
	<script>
		$(document).ready(function{
			$("#btnJoin").click(function(){
				if($("#name").val==""){
					aleart("성명을 입력해주세요");
					$("#name").focus();
					return false;
				}else if($("input[name='gender']:checked").legnth==0){
					alert("성별을 선택해주세요.");
					return false;
				}else if($("input[name='hobby']:checked").legnth==0){
					alert("성별을 선택해주세요.");
					return false;
				}else{
					joinForm().submit();
				}
			});
			
			
		});
	</script>
</head>
<body>
	<h1>Join From</h1>
	<form name="jounForm action="#" method="get">
		<ul>
			<li>
				<label>아이디</label>
				<input type="text" name="name>" id="id">
			</li>
			<li>
				<label>성별</label>
				<input type="radio" name="gender" value="m" id="id">남자
				<input type="radio" name="gender" value="f" id="id">여지
			</li>
			<li>
				<label>취미</label>
				<input type="checkbox" name="hobby" value="게임">게임
				<input type="checkbox" name="hobby" value="노래">노래
				<input type="checkbox" name="hobby" value="등산">등산
				<input type="checkbox" name="hobby" value="영회">영회
			</li>
			<li>
				<label>취미</label>
				<input type="checkbox" name="hobby" value="게임">게임
				<input type="checkbox" name="hobby" value="노래">노래
				<input type="checkbox" name="hobby" value="등산">등산
				<input type="checkbox" name="hobby" value="영회">영회
			</li>
			<li>
				<label>취미</label>
				<input type="checkbox" name="hobby" value="게임">게임
				<input type="checkbox" name="hobby" value="노래">노래
				<input type="checkbox" name="hobby" value="등산">등산
				<input type="checkbox" name="hobby" value="영회">영회
			</li>
			<li>
				<button type="button" id="btnJoin">회원가입</button>
				<button type="button" id="btnReset">다시쓰기</button>
			</li>
			
		</ul>
	</form>
</body>
</html>