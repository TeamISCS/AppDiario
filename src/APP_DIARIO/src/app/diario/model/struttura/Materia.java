package app.diario.model.struttura;

public class Materia {
	private int id_materia;
	private String materia;
	
	public Materia() {
		super();
	}
	
	public Materia(int id_materia, String materia) {
		super();
		this.id_materia = id_materia;
		this.materia = materia;
	}
	/**
	 * @return the id_materia
	 */
	public int getId_materia() {
		return id_materia;
	}
	/**
	 * @param id_materia the id_materia to set
	 */
	public void setId_sezione(int id_materia) {
		this.id_materia = id_materia;
	}
	/**
	 * @return the materia
	 */
	public String getSezione() {
		return materia;
	}
	/**
	 * @param materia the materia to set
	 */
	public void setSezione(String materia) {
		this.materia = materia;
	}
	
	
}
