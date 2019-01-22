package app.diario.model.user;

import java.util.Date;

public class Utente {
	private int id_user;
	private String user;
	private String pass;
	private int privilegio;
	private String nome;
	private String cognome;
	private String luogoNascita;
	private Date dataNascita;
	private String codFiscale;
	
	public Utente() {
		super();
	}
	public Utente(int id_user, String user, String pass, int privilegio, String nome, String cognome,
			String luogoNascita, Date dataNascita, String codFiscale) {
		super();
		this.id_user = id_user;
		this.user = user;
		this.pass = pass;
		this.privilegio = privilegio;
		this.nome = nome;
		this.cognome = cognome;
		this.luogoNascita = luogoNascita;
		this.dataNascita = dataNascita;
		this.codFiscale = codFiscale;
	}
	/**
	 * @return the id_user
	 */
	public int getId_user() {
		return id_user;
	}
	/**
	 * @param id_user the id_user to set
	 */
	public void setId_user(int id_user) {
		this.id_user = id_user;
	}
	/**
	 * @return the user
	 */
	public String getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(String user) {
		this.user = user;
	}
	/**
	 * @return the pass
	 */
	public String getPass() {
		return pass;
	}
	/**
	 * @param pass the pass to set
	 */
	public void setPass(String pass) {
		this.pass = pass;
	}
	/**
	 * @return the privilegio
	 */
	public int getPrivilegio() {
		return privilegio;
	}
	/**
	 * @param privilegio the privilegio to set
	 */
	public void setPrivilegio(int privilegio) {
		this.privilegio = privilegio;
	}
	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}
	/**
	 * @param nome the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}
	/**
	 * @return the cognome
	 */
	public String getCognome() {
		return cognome;
	}
	/**
	 * @param cognome the cognome to set
	 */
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	/**
	 * @return the luogoNascita
	 */
	public String getLuogoNascita() {
		return luogoNascita;
	}
	/**
	 * @param luogoNascita the luogoNascita to set
	 */
	public void setLuogoNascita(String luogoNascita) {
		this.luogoNascita = luogoNascita;
	}
	/**
	 * @return the dataNascita
	 */
	public Date getDataNascita() {
		return dataNascita;
	}
	/**
	 * @param dataNascita the dataNascita to set
	 */
	public void setDataNascita(Date dataNascita) {
		this.dataNascita = dataNascita;
	}
	/**
	 * @return the codFiscale
	 */
	public String getCodFiscale() {
		return codFiscale;
	}
	/**
	 * @param codFiscale the codFiscale to set
	 */
	public void setCodFiscale(String codFiscale) {
		this.codFiscale = codFiscale;
	}
}
