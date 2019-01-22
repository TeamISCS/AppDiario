package app.diario.model.user;

import java.util.Date;

public class Studente extends Utente {
	private String[] codFiscaleGenitore;
	private String sezione;
	
	public Studente() {
		super();
	}
	
	
	public Studente(int id_user, String user, String pass, int privilegio, String nome, String cognome,
			String luogoNascita, Date dataNascita, String codFiscale, String[] codFiscaleGenitore, String sezione) {
		super(id_user, user, pass, privilegio, nome, cognome, luogoNascita, dataNascita, codFiscale);
		this.codFiscaleGenitore = codFiscaleGenitore;
		this.sezione = sezione;
	}
	/**
	 * @return the codFiscaleGenitore
	 */
	public String[] getCodFiscaleGenitore() {
		return codFiscaleGenitore;
	}
	/**
	 * @param codFiscaleGenitore the codFiscaleGenitore to set
	 */
	public void setCodFiscaleGenitore(String[] codFiscaleGenitore) {
		this.codFiscaleGenitore = codFiscaleGenitore;
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
	
	
}
