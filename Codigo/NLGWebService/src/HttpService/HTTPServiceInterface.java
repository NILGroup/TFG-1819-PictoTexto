package HttpService;

import java.util.ArrayList;

import NLG.Word;

public interface HTTPServiceInterface {

	
	public Word[] getWords(ArrayList<String> body) throws Exception;
	public String getTypePhrase(ArrayList<String> body) throws Exception;
	
}
