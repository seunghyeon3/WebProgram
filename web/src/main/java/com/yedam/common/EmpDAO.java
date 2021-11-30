package com.yedam.common;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yedam.emp.EmployeeVO;

import emp.DAO;

class Employee {
	private int employeeId;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;
	private String hireDate;
	private String jobId;
	private int salary;

	public Employee() {

	}

	public Employee(int employeeId, String firstName, String lastName, String email, String phoneNumber,
			String hireDate, String jobId, int salary) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.hireDate = hireDate;
		this.jobId = jobId;
		this.salary = salary;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getHireDate() {
		return hireDate;
	}

	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
	}

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", phoneNumber=" + phoneNumber + ", hireDate=" + hireDate + ", jobId=" + jobId + ", salary="
				+ salary + "]";
	}

}

public class EmpDAO extends DAO {
	
	//한건조회(사원번호)
	public EmployeeVO findEmployee(String empId) {
		
		String sql = "select * from empl_demo where employee_id = ?";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, empId);
			
			rs = psmt.executeQuery();
			
			if(rs.next()) {
				EmployeeVO vo = new EmployeeVO();
				vo.setEmployeeId(rs.getInt("employee_id"));
				vo.setFirstName(rs.getString("first_name"));
				vo.setLastName(rs.getString("last_name"));
				vo.setEmail(rs.getString("email"));
				vo.setHireDate(rs.getString("hire_date"));
				vo.setJobId(rs.getString("job_id"));
				vo.setSalary(rs.getInt("salary"));
				
				return vo;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
			System.out.println("정상 종료");
		}
		return null;
	}
	//삭제(사원번호)
	public boolean deleteEmployee(String empId) {
		String sql = "delete from empl_demo where employee_id = ?";
		connect();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, Integer.parseInt(empId));
			int result = psmt.executeUpdate();
			System.out.println(result + "건이 변경");
			if(result > 0) {
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}finally {
			disconnect();
		}
		return false;
	}
	//수정(사원번호)
	public EmployeeVO updateEmployee(EmployeeVO vo){
		String sql = "update empl_demo\r\n"
				+ "set first_name = ?,\r\n"
				+ "last_name = ?,\r\n"
				+ "email =?,\r\n"
				+ "hire_date =?,\r\n"
				+ "salary =?\r\n"
				+ "where employee_id = ?";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			
			psmt.setString(1, vo.getFirstName());
			psmt.setString(2, vo.getLastName());
			psmt.setString(3, vo.getEmail());
			psmt.setString(4, vo.getHireDate());
			psmt.setInt(5, vo.getSalary());
			psmt.setInt(6, vo.getEmployeeId());
			int result = psmt.executeUpdate();
			System.out.println(result + "건이 변경");
			if(result > 0) {
				return vo;
			}
				
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}finally {
			disconnect();
		}
		return null;
	}
	
	// 입력기능.
	public boolean insertEmp(EmployeeVO vo) {
		
		String sql = "insert into empl_demo (employee_id, first_name, last_name, email, job_id, hire_date, salary) values(?,?,?,?,?,?,?)";
		
		connect();
		try {
		psmt = conn.prepareStatement(sql);
		psmt.setInt(1, vo.getEmployeeId());
		psmt.setString(2, vo.getFirstName());
		psmt.setString(3, vo.getLastName());
		psmt.setString(4, vo.getEmail());
		psmt.setString(5, vo.getJobId());
		psmt.setString(6, vo.getHireDate());
		psmt.setInt(7, vo.getSalary());
		
		int result = psmt.executeUpdate();
		System.out.println(result + "건 완료");
		if(result<1) {
			return false;
		}else {
			return true;
		}
		}catch(SQLException e) {
			e.printStackTrace();
			return false;
		}finally {
			disconnect();
		}
	}

	// 전체조회.
	

	public List<Employee> getEmployees() {
		List<Employee> list = new ArrayList<Employee>();
		String sql = "select * from empl_demo order by 1 desc";

		connect();
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);

			while (rs.next()) {
				Employee emp = new Employee(rs.getInt("employee_id"), rs.getString("first_name"),
						rs.getString("last_name"), rs.getString("email"), rs.getString("phone_number"),
						rs.getString("hire_date").substring(0, 10), rs.getString("job_id"), rs.getInt("salary"));
				list.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;

	}

	public String getString(String name) {
		String something = "Hello, " + name;
		return something;
	}

	public List<String> getNames() {
		String[] names = { "hong", "kim", "park", "choi" };
		List<String> returnList = new ArrayList<String>();
		for (String name : names) {
			returnList.add(name);
		}
		return returnList;
	}

	public Map<String, Integer> getScores() {
		String[] names = { "hong", "kim", "park", "choi" };
		Map<String, Integer> map = new HashMap<String, Integer>();
		int score = 80;
		for (String name : names) {
			map.put(name, score++);
		}
		return map;
	}
}
