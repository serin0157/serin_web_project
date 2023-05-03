		$(document).ready(function(){
			const gangnam ={title:"강남고등학교", address:"서울시 강남구 강남대로123",
							grade:{gtitle:"2학년 1반", list:[{name:"홍길동",kor:100,eng:50,math:100},
														   {name:"테스트",kor:90,eng:70,math:100},
														   {name:"자바",kor:80,eng:80,math:100},
														   {name:"오라클",kor:70,eng:90,math:100},
														   {name:"스크립트",kor:60,eng:100,math:100}]    }};
			/* json 객체인 gangnam 데이터를 테이블 형식으로 출력
				title - h1
				address, gtitle - h3
				list 테이블 형식
			*/
				let output = "<h1> 학 교 명: "+gangnam.title+"</h1>";
				output += "<h3> 주     소  : "+ gangnam.address + "</h3>";
				output += "<h3> 학년/반  : "+ gangnam.grade.gtitle+"</h3>";
				output += "<table>";		
				output += "<tr><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>총점</th><th>평균</th></tr>";		
				
			for(score of gangnam.grade.list){
				let tot = score.kor + score.eng + score.math;
				let avg = Math.round(tot/3);
				output += "<tr>";
				output += "<td>"+score.name+"</td>";
				output += "<td>"+score.kor+"</td>";
				output += "<td>"+score.eng+"</td>";
				output += "<td>"+score.math+"</td>";
				output += "<td>"+ tot +"</td>";
				output += "<td>"+ avg +"</td>";
				output += "</tr>";
			} 
				output += "</table>";		
				
			$("body").append(output);
		});