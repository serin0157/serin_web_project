package com.beans.serin_web_project1;

import java.util.ArrayList;

public class EmpDao extends DBConn{
	
	/* ����Ʈ ��� */
	public ArrayList<EmpVo> getList(){
		//3. PreparedStatment ��ü ����
		ArrayList<EmpVo> list = new ArrayList<EmpVo>();
		
		String sql = "select empno, ename, deptno from emp";
		getPreparedStatement(sql);
		try {
			//4.ResultSet ����
			rs = pstmt.executeQuery();
			
			//5. ������ ���
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
