package servelts;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
import NLG.Word;
import proxy.Proxy;
import simplenlg.framework.NLGElement;
import simplenlg.framework.NLGFactory;
import simplenlg.phrasespec.NPPhraseSpec;
import simplenlg.phrasespec.SPhraseSpec;

/**
 * Servlet implementation class createSimplePhrase
 */
@WebServlet("/httpTest")
public class httpTest extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public httpTest() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		Proxy myProxy = new Proxy();
		ArrayList palabras = new ArrayList<String>();
		palabras.add("rapido");
		palabras.add("brusco");
		palabras.add("ser");
		
		Gson gson = new Gson();
		
		String parameters =gson.toJson(palabras);
		System.out.println(parameters);
		try {
			myProxy.sendPost("http://127.0.0.1:8000/translate/getWordAttrs", parameters);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

	}

	@Override
	protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		setAccessControlHeaders(resp);
		resp.setStatus(HttpServletResponse.SC_OK);
	}

	private void setAccessControlHeaders(HttpServletResponse resp) {
		resp.setHeader("Access-Control-Allow-Origin", "*");
		resp.setHeader("Access-Control-Request-Headers", "Origin, X-Requested-With, X-CSRFToken, Content-Type, accept");
		resp.setHeader("Access-Control-Allow-Methods", "GET,POST");
		resp.setHeader("Content-Type", "application/json");
		resp.setHeader("Response-Type", "text/plain");

	}

}
