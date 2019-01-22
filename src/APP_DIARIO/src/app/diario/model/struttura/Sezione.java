package app.diario.model.struttura;

public class Sezione {
	private int id_sezione;
	private String sezione;
	
	public Sezione() {
		super();
	}
	
	public Sezione(int id_sezione, String sezione) {
		super();
		this.id_sezione = id_sezione;
		this.sezione = sezione;
	}
	/**
	 * @return the id_sezione
	 */
	public int getId_sezione() {
		return id_sezione;
	}
	/**
	 * @param id_sezione the id_sezione to set
	 */
	public void setId_sezione(int id_sezione) {
		this.id_sezione = id_sezione;
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
