$(document).ready(function(){ 
	//실행 버튼 이벤트
	$("#btnKobis").click(function(){
		if($("#kselect").val() == "default"){
			alert("박스오피스를 선택해주세요");
			$("#kselect").focus();
			return false;
		}else if($("input[type='text']").val()==""){
			alert("날짜를 선택해주세요");
			$("input[type='text']").focus();
			return false;	
		}else{
			//1. 일별, 주말 박스 오피스에 JSON 데이터 가져오기
			let kdate =$("input[type='text']").val();
			let ktype= $("#kselect").val();
			let url="";
			if(ktype == "Daily"){
				//일별 박스 오피스
				url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search"+ktype+"BoxOfficeList." +
					  "json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+kdate;
			}else{
				//주말 박스 오피스
				url ="http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search"+ktype+"BoxOfficeList." +
					 "json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+kdate;
			}
			//alert(url);
			$.getJSON(url, function(kobis){
				//2. output
				let boxOffice = kobis.boxOfficeResult;
				let output = "<div id='d2'>";
				output += "<h1> 제목 : "+ boxOffice.boxofficeType +"</h1>";
					output += "<h3> 기간 : "+ boxOffice.showRange+ "</h3>";
					output += "<table border=1>";
					output += "<tr>";
					output += "<th>순위</th>";
					output += "<th>영화제목</th>";
					output += "<th>개봉일</th>";
					output += "<th>누적관객수</th>";
					output += "<th>상영횟수</th>";
					output += "</tr>";
					
					let listName = null;
					if(ktype == "Daily"){
						listName = boxOffice.dailyBoxOfficeList
					}else{
						listName = boxOffice.weeklyBoxOfficeList
					}
					
					for(list of listName){
						output += "<tr>";
						output += "<td>"+ list.rank +"</td>";
						output += "<td>"+ list.movieNm +"</td>";
						output += "<td>"+ list.openDt +"</td>";
						output += "<td>"+ list.audiAcc +"</td>";
						output += "<td>"+ list.showCnt +"</td>";
						output += "</tr>";
					}
					output += "</table>";
					output += "</div>";
				
				//3. 출력 위치
				
				//이전 출력 화면 삭제
				
			
				$("div#d2").remove();
		
				//$("body").append(output);
				//$().before();//p1 기준
				$("#p1").css("background","tomato");
				$("#d1").after(output); //d2 기준
				
				
			});//getJSON
			
		}
	});//btnKobis
	
});//ready