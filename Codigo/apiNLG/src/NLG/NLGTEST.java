package NLG;


//SIMPLENLG-ES imports
import simplenlg.framework.*;
import simplenlg.lexicon.*;
import simplenlg.lexicon.spanish.XMLLexicon;
import simplenlg.realiser.spanish.*;
import simplenlg.phrasespec.*;
import simplenlg.features.*;

public class NLGTEST {

	private  Lexicon lexicon;
	private  NLGFactory nlgFactory;
	private  Realiser realiser;
	private SPhraseSpec simplePhrase;
	private  String output;
	
	
	public NLGTEST(String subject, String verb, String object) {
		createASimplePhrase(subject, verb, object);
	}
	
	public void createASimplePhrase(String subject, String verb, String object) {
		// TODO Auto-generated method stub
		   
		   lexicon = new XMLLexicon();
		   nlgFactory = new NLGFactory(lexicon);
		   realiser = new Realiser(lexicon);
		   
		   SPhraseSpec phrase = nlgFactory.createClause();

		   phrase.setSubject(subject);
		   phrase.setVerb(verb);
		   phrase.setObject(object);   
		   output = realiser.realiseSentence(phrase);
		
	}
	
	
	public  String getOutput() {
		System.out.println(output);
		return output;
	}
	

}
