package app.diario.model.user;

import java.util.Date;

public class Genitore extends Utente {
	
	public Genitore() {
		super();
	}
	
	
	public Genitore(int id_user, String user, String pass, int privilegio, String nome, String cognome,
			String luogoNascita, Date dataNascita, String codFiscale) {
		super(id_user, user, pass, privilegio, nome, cognome, luogoNascita, dataNascita, codFiscale);
	}
}
