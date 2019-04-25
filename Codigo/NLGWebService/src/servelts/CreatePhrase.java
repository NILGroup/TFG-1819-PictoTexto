package servelts;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.sun.org.apache.xalan.internal.xsltc.compiler.sym;

import HttpService.HttpService;
import NLG.Attributes;
import NLG.NLG;
import NLG.Word;
import proxy.Proxy;
import simplenlg.framework.NLGElement;
import simplenlg.phrasespec.NPPhraseSpec;

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
		NLG miNlgTest = NLG.getInstance();
		ArrayList<String> wordsList = (ArrayList<String>) gson.fromJson(request.getReader(),ArrayList.class);

		try {
			Word[] words =service.getWords(wordsList);
			
			Attributes type = gson.fromJson(service.getTypePhrase(wordsList),Attributes.class);
			
			ArrayList<NLGElement> wordNLG = miNlgTest.createNLGWords(words);
			int i = miNlgTest.recogniseVerb(wordNLG);
			// DEFINE subject
			if(i>0) {
				List<NLGElement> subjectWords = wordNLG.subList(0, i);
				NPPhraseSpec subject = miNlgTest.createSubject(subjectWords);
				List<NLGElement> objectWords = wordNLG.subList(i + 1, wordsList.size());
				NPPhraseSpec object = miNlgTest.createObject(objectWords);
				switch(type.getType()) {
					case("past"):
						miNlgTest.createASimplePastPhrase(subject, wordNLG.get(i), object);
						break;
					case("future"):
						miNlgTest.createASimpleFuturePhrase(subject, wordNLG.get(i), object);
						break;
					default:
						miNlgTest.createASimplePhrase(subject, wordNLG.get(i), object);
						break;
				}
			}else {
				NPPhraseSpec subject = miNlgTest.createSubject(wordNLG);
				miNlgTest.createASimplePhrase(subject, null, null);
			}
			response.getWriter().append(gson.toJson(miNlgTest.getOutput()));
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Content-Type", "text/plain");
			response.setStatus(HttpServletResponse.SC_OK);
			
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
		resp.setHeader("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, accept");
		resp.setHeader("Access-Control-Allow-Methods", "GET,DO,POST");
		resp.setHeader("Content-Type", "application/json");
		resp.setHeader("Response-Type", "text/plain");

	}

}
