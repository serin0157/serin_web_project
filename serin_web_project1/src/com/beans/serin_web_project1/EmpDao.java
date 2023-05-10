package com.beans.serin_web_project1;

import java.util.ArrayList;

public class EmpDao extends DBConn{
	
	/* 리스트 출력 */
	public ArrayList<EmpVo> getList(){
		//3. PreparedStatment 객체 생성
		ArrayList<EmpVo> list = new ArrayList<EmpVo>();
		
		String sql = "select empno, ename, deptno from emp";
		getPreparedStatement(sql);
		try {
			//4.ResultSet 생성
			rs = pstmt.executeQuery();
			
			//5. 데이터 출력
			while(rs.next()){
				EmpVo empVo = new EmpVo();
				empVo.setEmpno(rs.getInt(1));
				empVo.setEname(rs.getString(2));
				empVo.setDeptno(rs.getInt(3));
				
				list.add(empVo);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	
}
