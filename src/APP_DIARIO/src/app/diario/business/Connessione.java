package app.diario.business;

import java.sql.Connection;
import java.sql.SQLException;


import com.mysql.cj.jdbc.MysqlDataSource;


public class Connessione {
	private Connection con;
	private static Connessione rb;
	
	public static Connessione getInstance() {
		if(rb==null) {
			rb = new Connessione();
		}
		return rb;
	}
	
	
	
	
	protected Connection getConnection() throws SQLException {
		if(con == null) {
			MysqlDataSource dataSource = new MysqlDataSource();
			dataSource.setServerName("localhost");
			dataSource.setPortNumber(3306);
			dataSource.setUser("root");
			dataSource.setPassword("root");
			dataSource.setDatabaseName("corso_java_rubrica");
			dataSource.setServerTimezone("Europe/Paris");
			
			con = dataSource.getConnection();
		}
		
		return con;
	}
}
