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

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class NLG {

	private static NLG instance;
	private Lexicon lexicon;
	private Realiser realiser;
	private SPhraseSpec simplePhrase;
	private String output;
	private NLGFactory factory;

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
	
	public void createASimplePhrase(String arrayWords[]) {
		this.simplePhrase = new SPhraseSpec(factory);

		// READ AND CREATE WORDS
		ArrayList<NLGElement> wordsList = new ArrayList<NLGElement>();
		ArrayList<Integer> verbPosition = new ArrayList<Integer>();
		for (int i = 0; i < arrayWords.length; ++i) {
			NLGElement aux = factory.createWord(arrayWords[i], LexicalCategory.ANY);
			if (aux.getCategory() == LexicalCategory.VERB) {
				verbPosition.add(i);
			}
			wordsList.add(aux);
		}

		//DEFINE SUBJECT AND THEN CREATE THE SUBJECT PHRASE
		int actual=0;
		for(Integer position : verbPosition) {
			List<NLGElement> subjectWords = wordsList.subList(actual, position);
			String[] words = Arrays.copyOfRange(arrayWords, actual,position);
			actual=position;
			NPPhraseSpec subject = createSubject(subjectWords,words);
			simplePhrase.setSubject(subject);

		}
		
		NPPhraseSpec object = factory.createNounPhrase(arrayWords[arrayWords.length-1]);
		VPPhraseSpec verb = factory.createVerbPhrase(arrayWords[arrayWords.length-2]);
		simplePhrase.setVerb(verb);
		simplePhrase.setObject(object);
		output = realiser.realiseSentence(simplePhrase);

	}

	private NPPhraseSpec createSubject(List<NLGElement> subjectWords, String[] words) {
		NPPhraseSpec subject = null;
		int position=0;
		for(NLGElement word : subjectWords) {
			subject =factory.createNounPhrase(words[position]);
			if(word.getCategory() != LexicalCategory.NOUN) {
				subject=setDeterminer(subject, word, words[position]);
			}
			position++;
		}
		
		return subject;
	}

	private NPPhraseSpec setDeterminer(NPPhraseSpec subject, NLGElement subjectWord, String word) {

		if (subjectWord.getCategory() != LexicalCategory.DETERMINER && subjectWord.getCategory() != LexicalCategory.PRONOUN) {
			subject.setDeterminer("el");
		}

		for (Entry<String, Object> entry : subjectWord.getAllFeatures().entrySet()) {
			if (entry.getValue().toString().compareToIgnoreCase(word) == 0) {
				String rules = entry.getKey().toString();
				if (rules.contains("plural")) {
					subject.setPlural(true);
					if (subjectWord.getCategory() != LexicalCategory.NOUN
							&& subjectWord.getCategory() != LexicalCategory.PRONOUN)
						subject.setDeterminer("los");
				}
				if (rules.contains("feminine")) {
					subject.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
					if (subjectWord.getCategory() != LexicalCategory.NOUN
							&& subjectWord.getCategory() != LexicalCategory.PRONOUN)
						subject.setDeterminer("la");
				}
			}
		}
		return subject;
	}

	public String getOutput() {
		System.out.println(output);
		return output;
	}

}
