package com.yedam.common;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.yedam.emp.EmployeeVO;

/**
 * Servlet implementation class GetJsonServlet
 */
@WebServlet("/GetJsonServlet")
public class GetJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GetJsonServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		EmpDAO dao = new EmpDAO();
		List<Employee> list = dao.getEmployees();

		JSONObject obj = new JSONObject();
		JSONArray ary = new JSONArray();

		for (Employee emp : list) {
			JSONObject innerObj = new JSONObject();
			innerObj.put("employeeId", emp.getEmployeeId());
			innerObj.put("firstName", emp.getFirstName());
			ary.add(innerObj);
		}

		obj.put("retCode", "Success");
		obj.put("retVal", ary);
		Gson gson = new GsonBuilder().setPrettyPrinting().create();

		JsonObject object = new JsonObject();

		response.getWriter().println(gson.toJson(list).toString());
		// response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		String cmd = request.getParameter("cmd");
		String empId = request.getParameter("a");
		String firstName = request.getParameter("b");
		String lastName = request.getParameter("c");
		String email = request.getParameter("d");
		String hireDate = request.getParameter("e");
		String jobid = request.getParameter("f");
		String salary = request.getParameter("g");

		EmpDAO dao = new EmpDAO();

		EmployeeVO vo = new EmployeeVO();

		vo.setEmployeeId(Integer.parseInt(empId));
		vo.setFirstName(firstName);
		vo.setLastName(lastName);
		vo.setEmail(email);
		vo.setJobId(jobid);
		vo.setHireDate(hireDate);

		if (!cmd.equals("delete"))
			vo.setSalary(Integer.parseInt(salary));

		if (cmd.equals("insert")) {
			if (dao.insertEmp(vo)) {

				JSONObject innerObj = new JSONObject();

				innerObj.put("employeeId", vo.getEmployeeId());
				innerObj.put("firstName", vo.getFirstName());
				innerObj.put("lastName", vo.getLastName());
				innerObj.put("email", vo.getEmail());
				innerObj.put("hireDate", vo.getHireDate());
				innerObj.put("jobId", vo.getJobId());
				innerObj.put("salary", vo.getSalary());

				JSONObject obj = new JSONObject();

				obj.put("retCode", "Success");
				obj.put("retVal", innerObj);

				response.getWriter().println(obj);

			} else {
				JSONObject err = new JSONObject();
				err.put("retCode", "Fail");
				err.put("retVal", "처리중 에러 발생");

				response.getWriter().println(err);
			}
		} else if (cmd.equals("update")) {
			if (dao.updateEmployee(vo) != null) {
				JSONObject innerObj = new JSONObject();

				innerObj.put("employeeId", vo.getEmployeeId());
				innerObj.put("firstName", vo.getFirstName());
				innerObj.put("lastName", vo.getLastName());
				innerObj.put("email", vo.getEmail());
				innerObj.put("hireDate", vo.getHireDate());
				innerObj.put("jobId", vo.getJobId());
				innerObj.put("salary", vo.getSalary());

				JSONObject obj = new JSONObject();

				obj.put("retCode", "Success");
				obj.put("retVal", innerObj);

				response.getWriter().println(obj);

			} else {
				JSONObject err = new JSONObject();
				err.put("retCode", "Fail");
				err.put("retVal", "처리중 에러 발생");

				response.getWriter().println(err);
			}
		} else if (cmd.equals("delete")) {
			System.out.println(empId);
			if (dao.deleteEmployee(empId)) {
				response.getWriter().println("{\"retCode\":\"Success\"}");

			} else {
				response.getWriter().println("{\"retCode\":\"fail\"}");
			}
		}

	}

}
