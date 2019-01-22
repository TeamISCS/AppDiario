package app.diario.model.struttura;

import java.util.Date;

public class Compito {
	private int id_compito;
	private int id_user;
	private String sezione;
	private Date dataCreazione;
	private Date dataScadenza;
	private String titolo;
	private String dezione;
	
	
	public Compito() {
		super();
	}
	
	
	
	public Compito(int id_compito, int id_user, String sezione, Date dataCreazione, Date dataScadenza, String titolo,
			String dezione) {
		super();
		this.id_compito = id_compito;
		this.id_user = id_user;
		this.sezione = sezione;
		this.dataCreazione = dataCreazione;
		this.dataScadenza = dataScadenza;
		this.titolo = titolo;
		this.dezione = dezione;
	}
	/**
	 * @return the id_compito
	 */
	public int getId_compito() {
		return id_compito;
	}
	/**
	 * @param id_compito the id_compito to set
	 */
	public void setId_compito(int id_compito) {
		this.id_compito = id_compito;
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
	 * @return the sezione
	 */
	public String getSezione() {
		return sezione;
	}
	/**
	 * @param sezione the sezione to set
	 */
	public void setSezione(String sezione) {
		this.sezione = sezione;
	}
	/**
	 * @return the dataCreazione
	 */
	public Date getDataCreazione() {
		return dataCreazione;
	}
	/**
	 * @param dataCreazione the dataCreazione to set
	 */
	public void setDataCreazione(Date dataCreazione) {
		this.dataCreazione = dataCreazione;
	}
	/**
	 * @return the dataScadenza
	 */
	public Date getDataScadenza() {
		return dataScadenza;
	}
	/**
	 * @param dataScadenza the dataScadenza to set
	 */
	public void setDataScadenza(Date dataScadenza) {
		this.dataScadenza = dataScadenza;
	}
	/**
	 * @return the titolo
	 */
	public String getTitolo() {
		return titolo;
	}
	/**
	 * @param titolo the titolo to set
	 */
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	/**
	 * @return the dezione
	 */
	public String getDezione() {
		return dezione;
	}
	/**
	 * @param dezione the dezione to set
	 */
	public void setDezione(String dezione) {
		this.dezione = dezione;
	}
	
	
}
