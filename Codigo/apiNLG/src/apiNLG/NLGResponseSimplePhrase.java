package apiNLG;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import NLG.NLG;
import NLG.SimplePhrase;
 

@Path("/createASimplePhrase")
public class NLGResponseSimplePhrase{
	  @POST
	  @Consumes(MediaType.APPLICATION_JSON)
	  @Produces(MediaType.APPLICATION_JSON)
	  public Response sayHello(String  data) {
		  Gson gson = new Gson();
		  
		  SimplePhrase p = gson.fromJson(data, SimplePhrase.class);
		  System.out.println(p.getSubject());
		  
		  NLG miNlgTest = NLG.getInstance();
		  
		  miNlgTest.createASimplePhrase(p.getSubject(), p.getVerb(), p.getObject());
		  
	    return Response.ok(miNlgTest.getOutput(),
	    		MediaType.APPLICATION_JSON).build();
	  }
	 
 }