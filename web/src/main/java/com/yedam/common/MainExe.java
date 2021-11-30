package com.yedam.common;

import java.util.List;

class Student {
	private String studentNo;
	private String studentName;
	private int engScore;
	private int mathScore;

	public Student() {

	}

	public Student(String studentNo, String studentName) {
		this.studentNo = studentNo;
		this.studentName = studentName;
	}

	public String getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(String studentNo) {
		this.studentNo = studentNo;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getEngScore() {
		return engScore;
	}

	public void setEngScore(int engScore) {
		this.engScore = engScore;
	}

	public int getMathScore() {
		return mathScore;
	}

	public void setMathScore(int mathScore) {
		this.mathScore = mathScore;
	}

	public String getInfo() {
		return "학번 : " + studentNo + ", 이름 : " + studentName + ", 나머지들: " + engScore + ", " + mathScore;
	}

}

public class MainExe {
	public static void main(String[] args) {
		// getXML();
		getJSON();
	}

	public static void getJSON() {
		// [{"empId":22, "firstName":"shelly",........}{}]

		EmpDAO dao = new EmpDAO();
		List<Employee> list = dao.getEmployees();
		int size = list.size();
		int cnt = 0;
		StringBuffer sb = new StringBuffer();
		sb.append("[");
		while (true) {
			sb.append("{\"empId\":"+list.get(cnt).getEmployeeId()+",\"firstName\":\""+list.get(cnt).getFirstName()+"\"}");
			cnt++;
			if(cnt==size) {
				break;
			}else {
				sb.append(",\n");
			}
		}
		sb.append("]");
		System.out.println(sb);
	}

	public static void getXML() {
		// <dataset><record>....</record><record>....</record><record>....</record></dataset>
		EmpDAO dao = new EmpDAO();
		List<Employee> list = dao.getEmployees();
		StringBuffer sb = new StringBuffer(); // 문장 추가 like append
		sb.append("<dataset>\n");
		for (int i = 0; i < list.size(); i++) {
			// System.out.println(list.get(i).getFirstName());
			sb.append("<record>");
			sb.append("<empId>" + list.get(i).getEmployeeId() + "</empId>");
			sb.append("<firstName>" + list.get(i).getFirstName() + "</firstName>");
			sb.append("<lastName>" + list.get(i).getLastName() + "</lastName>");
			sb.append("</record>\n");
		}
		sb.append("</dataset>");

		// System.out.println(sb);
	}
}