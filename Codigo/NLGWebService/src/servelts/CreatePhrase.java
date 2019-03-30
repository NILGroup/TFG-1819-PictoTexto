package servelts;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import HttpService.HttpService;

import NLG.Word;
import proxy.Proxy;

/**
 * Servlet implementation class createSimplePhrase
 */
@WebServlet("/createPhrase")
public class CreatePhrase extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private HttpService service;
	private Gson gson;
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CreatePhrase() {
		super();
		// TODO Auto-generated constructor stub
		gson = new Gson();
		service = new HttpService();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		ArrayList<String> wordsList = (ArrayList<String>) gson.fromJson(request.getReader(),ArrayList.class);
		
		try {
			Word[] words =service.getWords(wordsList);

			System.out.println(words[0].toString());

			String typePhrase = service.getTypePhrase(wordsList);
			
			System.out.println(typePhrase);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
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
