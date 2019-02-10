package NLG;


public class SimplePhrase {


 private String[] words;
 private String subject;
 private String verb;
 private String object;
	
	 
	 
	public SimplePhrase(String[] words){
		this.words=words;
	}
	

	public String[] getWords() {
		return words;
	}
	
	public void setWords(String[] words) {
		this.words=words;
	}
	
	public String getObject() {
		return object;
	}
	public void setObject(String object) {
		this.object = object;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getVerb() {
		return verb;
	}
	public void setVerb(String verb) {
		this.verb = verb;
	}
	
	@Override
	public String toString() {
		return "SimplePhrase [subject=" + subject + ", verb=" + verb + ", object=" + object + "]";
	}


	
}
