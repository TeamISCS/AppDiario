package app.diario.model.user;

import java.util.Date;

public class Docente extends Utente {
	private String[] materia;
	private String[] sezione;
	
	public Docente() {
		super();
	}
	
	
	public Docente(int id_user, String user, String pass, int privilegio, String nome, String cognome,
			String luogoNascita, Date dataNascita, String codFiscale, String[] materia, String[] sezione) {
		super(id_user, user, pass, privilegio, nome, cognome, luogoNascita, dataNascita, codFiscale);
		this.materia = materia;
		this.sezione = sezione;
	}
	/**
	 * @return the materia
	 */
	public String[] getMateria() {
		return materia;
	}
	/**
	 * @param materia the materia to set
	 */
	public void setMateria(String[] materia) {
		this.materia = materia;
	}
	/**
	 * @return the sezione
	 */
	public String[] getSezione() {
		return sezione;
	}
	/**
	 * @param sezione the sezione to set
	 */
	public void setSezione(String[] sezione) {
		this.sezione = sezione;
	}
	
	

}
