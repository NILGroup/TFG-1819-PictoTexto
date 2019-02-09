package NLG;


import java.util.Map.Entry;

import simplenlg.features.Gender;
import simplenlg.features.LexicalFeature;
import simplenlg.framework.LexicalCategory;
import simplenlg.framework.NLGElement;
import simplenlg.framework.NLGFactory;
//SIMPLENLG-ES imports
import simplenlg.lexicon.*;
import simplenlg.lexicon.spanish.XMLLexicon;
import simplenlg.realiser.spanish.*;
import simplenlg.phrasespec.*;

public class NLG {

	
	private static NLG instance;
	private  Lexicon lexicon;
	private   Realiser realiser;
	private  SPhraseSpec simplePhrase;
	private   String output;
	private   NLGFactory factory;
	
	public NLG() {
		 this.lexicon = new XMLLexicon();
		this.realiser = new Realiser(lexicon);
		 this.factory = new NLGFactory(lexicon);
		this.simplePhrase = new SPhraseSpec(factory);
	}
	
	
	public static NLG getInstance() {
		
		if(instance==null)
			instance = new NLG();
		
		return instance;
	}
	
	
	public void createASimplePhrase(String subjectString, String verbString, String objectString) {
		// TODO Auto-generated method stub
		NLGElement subjectWord = factory.createWord(subjectString, LexicalCategory.ANY);
		NPPhraseSpec subject =factory.createNounPhrase(subjectString);
		if(subjectWord.getCategory()!=LexicalCategory.DETERMINER && subjectWord.getCategory()!=LexicalCategory.PRONOUN) {
			subject.setDeterminer("el");
		}
		for (Entry<String, Object> entry : subjectWord.getAllFeatures().entrySet()) {
            if (entry.getValue().toString().compareToIgnoreCase(subjectString)==0) {
            	String rules=entry.getKey().toString();

            	if(rules.contains("plural")) {
            		subject.setPlural(true);
            		if(subjectWord.getCategory()!=LexicalCategory.NOUN && subjectWord.getCategory()!=LexicalCategory.PRONOUN) 
            			subject.setDeterminer("los");
            	}
            	if(rules.contains("feminine")) {
            		subject.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
            		if(subjectWord.getCategory()!=LexicalCategory.NOUN && subjectWord.getCategory()!=LexicalCategory.PRONOUN) 
            			subject.setDeterminer("la");
            	}          
        }
            }

		NPPhraseSpec object =factory.createNounPhrase(objectString);
	    VPPhraseSpec verb = factory.createVerbPhrase(verbString);
	    simplePhrase.setSubject(subject);
		simplePhrase.setVerb(verb);
		simplePhrase.setObject(objectString);  
		output = realiser.realiseSentence(simplePhrase);
		
	}
	
	
	public  String getOutput() {
		System.out.println(output);
		return output;
	}
	

}
