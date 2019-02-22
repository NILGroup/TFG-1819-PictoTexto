package NLG;

public class Word {

	

	private String keyword;
	private Attributes attrs;
	
	public Word(String word, Attributes attrs) {
		super();
		this.keyword = word;
		this.attrs = attrs;
	}
	public String getkeyword() {
		return keyword;
	}
	public Attributes getAttrs() {
		return attrs;
	}
	public void setkeyword(String word) {
		this.keyword = word;
	}
	public void setAttrs(Attributes attrs) {
		this.attrs = attrs;
	}

	
	@Override
	public String toString() {
		return "Word [word=" + keyword + ", attrs=" + attrs + "]";
	}
}
