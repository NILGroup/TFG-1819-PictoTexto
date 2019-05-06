package HttpService;

import java.util.ArrayList;
import com.google.gson.Gson;
import NLG.Word;
import proxy.Proxy;

public class HttpService implements HTTPServiceInterface{

	private Proxy proxy;
	private Gson gson;
	
	public HttpService() {
		this.proxy = new Proxy();
		gson = new Gson();
	}
	

	@Override
	public Word[] getWords(ArrayList<String> body) throws Exception {
		// TODO Auto-generated method stub
		String response = proxy.sendPost("https://holstein.fdi.ucm.es/tfg-pict2text/translate/getWordAttrs", gson.toJson(body));
		Word[] words = gson.fromJson(response, Word[].class);
		return words;
	}

	@Override
	public String getTypePhrase(ArrayList<String> body) throws Exception {
		// TODO Auto-generated method stub
		
		String response = proxy.sendPost("https://holstein.fdi.ucm.es/tfg-pict2text/translate/getTypePhrase", gson.toJson(body));

		return response;
	}

}
