

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import NLG.NLG;
import NLG.SimplePhrase;
import simplenlg.framework.NLGFactory;
import simplenlg.phrasespec.SPhraseSpec;

/**
 * Servlet implementation class createSimplePhrase
 */
@WebServlet("/createSimplePhrase")
public class createSimplePhrase extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public createSimplePhrase() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Content-Type","text/plain");

	        StringBuilder sb = new StringBuilder();
         String s;
         while ((s = request.getReader().readLine()) != null) {
              sb.append(s);
         }

		Gson gson = new Gson();
		  SimplePhrase p = gson.fromJson(sb.toString(), SimplePhrase.class);
		  NLG miNlgTest = NLG.getInstance();
		  miNlgTest.createASimplePhrase(p.getSubject(), p.getVerb(), p.getObject());
		  response.setStatus(HttpServletResponse.SC_OK);
		  response.getWriter().append( gson.toJson(miNlgTest.getOutput()));

	}
	
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        setAccessControlHeaders(resp);
        resp.setStatus(HttpServletResponse.SC_OK);
    }

	  private void setAccessControlHeaders(HttpServletResponse resp) {
	        resp.setHeader("Access-Control-Allow-Origin", "*");
	        resp.setHeader("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, accept");
	        resp.setHeader("Access-Control-Allow-Methods", "GET,POST");
	        resp.setHeader("Content-Type","application/json");
	        resp.setHeader("Response-Type","text/plain");


	    }
	
}
