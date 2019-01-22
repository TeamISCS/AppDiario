package app.diario.business;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import app.diario.model.user.Utente;

public class DBUtente extends Connessione {
	
	public List<Utente> selectContatti() throws SQLException {
		String sql = "SELECT id, nome, cognome, telefono FROM contatti";
		
		PreparedStatement ps = getConnection().prepareStatement(sql);
		
		ResultSet rs = ps.executeQuery();
		List<Utente> cList = new ArrayList<Utente>();
		
		while(rs.next()) {
			Utente c = new Utente();
			c.setId_user(rs.getInt(1));
			c.setUser(rs.getString(2));
			c.setPass(rs.getString(3));
			c.setPrivilegio(rs.getInt(4));
			c.setNome(rs.getString(5));
			c.setCognome(rs.getString(6));
			c.setLuogoNascita(rs.getString(7));
			c.setDataNascita(rs.getDate(8));
			c.setCodFiscale(rs.getString(9));
			cList.add(c);
		}
		return cList;
	}
	public void deleteContatto(int id) throws SQLException {
		String sql = "DELETE FROM contatti WHERE id = ?";
		
		PreparedStatement ps = getConnection().prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
		ps.setInt(1, id);
		
		ps.executeUpdate();
	}
	
	public void updateContatto(Utente c) throws SQLException {
		String sql = "UPDATE contatti SET nome = ?, cognome = ?, telefono = ? WHERE id = ?";
		
		PreparedStatement ps = getConnection().prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

		ps.setInt(1, c.getId_user());
		ps.setString(2, c.getUser());
		ps.setString(3, c.getPass());
		ps.setInt(4,c.getPrivilegio());
		ps.setString(5,c.getNome());
		ps.setString(6,c.getCognome());
		ps.setString(7,c.getLuogoNascita());
		ps.setDate(8,(java.sql.Date) c.getDataNascita());
		ps.setString(9,c.getCodFiscale());

		
		ps.executeUpdate();
	}
	
	public int aggiungiContatto(Utente c) throws SQLException {
		String sql = "INSERT INTO contatti(nome, cognome, telefono) VALUES(?, ?, ?)";
		PreparedStatement ps = getConnection().prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
		
		ps.setInt(1, c.getId_user());
		ps.setString(2, c.getUser());
		ps.setString(3, c.getPass());
		ps.setInt(4,c.getPrivilegio());
		ps.setString(5,c.getNome());
		ps.setString(6,c.getCognome());
		ps.setString(7,c.getLuogoNascita());
		ps.setDate(8,(java.sql.Date) c.getDataNascita());
		ps.setString(9,c.getCodFiscale());
		
		ps.executeUpdate();
		
		ResultSet rs = ps.getGeneratedKeys();
		rs.next();
		
		return rs.getInt(1);
	}
}
