package NLG;

public class SimplePhrase {

	
 private String subject;
 private String verb;
 private String object;
	
	 
	 
	public SimplePhrase(String subject, String verb, String object){
		
		this.subject=subject;
		this.verb=verb;
		this.object=object;
		
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
