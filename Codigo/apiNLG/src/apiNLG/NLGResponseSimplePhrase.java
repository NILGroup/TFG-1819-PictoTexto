package apiNLG;
import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.crypto.Data;

import com.google.gson.Gson;

import NLG.NLGTEST;
import NLG.SimplePhrase;
 

@Path("/createASimplePhrase")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class NLGResponseSimplePhrase{
    	

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public Response sayHello(String  data) {
	  
	  Gson gson = new Gson();
	  SimplePhrase p = gson.fromJson(data, SimplePhrase.class);
	  System.out.println(p.getSubject());
	  NLGTEST miNlgTest = new NLGTEST(p.getSubject(), p.getVerb(), p.getObject());
	  
    return Response.ok(miNlgTest.getOutput(),
    		MediaType.APPLICATION_JSON).build();
  }
  

 }