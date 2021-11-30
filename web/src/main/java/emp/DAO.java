package emp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DAO {
	
	protected Connection conn;
	protected PreparedStatement psmt;
	protected Statement stmt;
	protected ResultSet rs;

	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:xe";
	String user = "hr";
	String password = "hr";

	protected void connect() {
		try {

			Class.forName(driver);
			System.out.println("jdbc driver 로딩 성공");
			// 2. DB 서버 접속
			conn = DriverManager.getConnection(url, user, password);
			System.out.println("오라클 연결 성공");
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}

	}

	protected void disconnect() {
		try {
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			if (stmt != null) {
				stmt.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		try {
			if (psmt != null) {
				psmt.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		try {
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}
}
