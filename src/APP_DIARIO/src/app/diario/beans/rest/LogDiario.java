package app.diario.beans.rest;

import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 * Session Bean implementation class LogDiario
 */
@Stateless
@Path(value="/log")
public class LogDiario {

    /**
     * Default constructor. 
     */
    public LogDiario() {
        // TODO Auto-generated constructor stub
    }
    @GET
    @Produces(value = "text/plain")
    @Path(value ="isAlive")
    public String isAlive() {
    	return "Sono vivo";
    }

}
