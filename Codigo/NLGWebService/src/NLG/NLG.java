package NLG;

import simplenlg.features.Feature;
import simplenlg.features.Gender;
import simplenlg.features.LexicalFeature;
import simplenlg.features.Person;
import simplenlg.features.Tense;
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

		if (instance == null)
			instance = new NLG();

		return instance;
	}

	public void createASimplePhrase(NPPhraseSpec subject, NLGElement verbWord, NPPhraseSpec objectWord) {
		this.simplePhrase = new SPhraseSpec(factory);

		VPPhraseSpec verb = factory.createVerbPhrase(verbWord);
		simplePhrase.setSubject(subject);
		if (verb != null) {
			simplePhrase.setVerbPhrase(verb);
			if (objectWord != null)
				simplePhrase.setObject(objectWord);
		}
		output = realiser.realiseSentence(simplePhrase);

	}

	public void createASimplePastPhrase(NPPhraseSpec subject, NLGElement verbWord, NLGElement objectWord) {
		this.simplePhrase = new SPhraseSpec(factory);

		VPPhraseSpec verb = factory.createVerbPhrase(verbWord);
		simplePhrase.setSubject(subject);
		if (verb != null) {
			simplePhrase.setVerbPhrase(verb);
			if (objectWord != null)
				simplePhrase.setObject(objectWord);
			simplePhrase.setFeature(Feature.TENSE, Tense.PAST);
		}
		output = realiser.realiseSentence(simplePhrase);

	}

	public void createASimpleFuturePhrase(NPPhraseSpec subject, NLGElement verbWord, NLGElement objectWord) {
		this.simplePhrase = new SPhraseSpec(factory);

		VPPhraseSpec verb = factory.createVerbPhrase(verbWord);
		simplePhrase.setSubject(subject);
		if (verb != null) {
			simplePhrase.setVerbPhrase(verb);
			if (objectWord != null)
				simplePhrase.setObject(objectWord);
			simplePhrase.setFeature(Feature.TENSE, Tense.FUTURE);
		}
		output = realiser.realiseSentence(simplePhrase);
	}

	public ArrayList<NLGElement> createNLGWords(Word[] words) {
		ArrayList<NLGElement> wordsList = new ArrayList<NLGElement>();
		for (int i = 0; i < words.length; ++i) {
			NLGElement aux = null;
			switch (words[i].getAttrs().getType()) {
			case ("VERB"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.VERB);
				break;
			case ("ADJ"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.ADJECTIVE);
				aux.setPlural(words[i].getAttrs().getNumber());
				break;
			case ("NOUN"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.NOUN);
				aux.setPlural(words[i].getAttrs().getNumber());
				if (words[i].getAttrs().getGender())
					aux.setFeature(LexicalFeature.GENDER, Gender.MASCULINE);
				else
					aux.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
				break;
			case ("ADV"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.ADVERB);
				break;
			case ("ADP"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.PREPOSITION);
				break;
			case ("PRON"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.PRONOUN);
				aux.setPlural(words[i].getAttrs().getNumber());
				if (words[i].getAttrs().getGender())
					aux.setFeature(LexicalFeature.GENDER, Gender.MASCULINE);
				else
					aux.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
				break;
			case ("DET"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.DETERMINER);
				aux.setPlural(words[i].getAttrs().getNumber());
				if (words[i].getAttrs().getGender())
					aux.setFeature(LexicalFeature.GENDER, Gender.MASCULINE);
				else
					aux.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
				break;
			}
			wordsList.add(aux);
		}
		return wordsList;
	}

	public int recogniseVerb(ArrayList<NLGElement> words) {
		int verbPosition = words.size() - 1;
		int i = 0;
		boolean found = false;
		while (!found && i < words.size()) {
			if (words.get(i).isA(LexicalCategory.VERB)) {
				verbPosition = i;
				found = true;
			}
			++i;
		}
		return verbPosition;
	}

	public NPPhraseSpec createSubject(List<NLGElement> subjectWords) {
		NPPhraseSpec subject = null;
		subject = factory.createNounPhrase();
		if(!subjectWords.isEmpty()) {
		for (NLGElement word : subjectWords) {
			if (word.isA(LexicalCategory.NOUN) || word.isA(LexicalCategory.PRONOUN)) {
				System.out.println(word);
				if (word.isA(LexicalCategory.NOUN)) {
					if (subject.getFeature(LexicalFeature.GENDER) == Gender.FEMININE) {
						word.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
					}
					subject.setHead(word);
					if (subject.getDeterminer().size() == 0)
						subject.setDeterminer("el");
				} else {
					word.setCategory(LexicalCategory.DETERMINER);
					subject.setHead(word);
				}
				subject.setPlural(word.isPlural());
				if (word.getFeature(LexicalFeature.GENDER) == Gender.FEMININE) {
					subject.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
				}
			} else {
				if (word.isA(LexicalCategory.ADVERB)) {
					subject.addPostModifier(word);
				} else {
					if (word.isA(LexicalCategory.DETERMINER)) {
						subject.setDeterminer(word.getAllFeatures().get("feminine_singular"));
						if (word.getFeature(LexicalFeature.GENDER) == Gender.FEMININE) {
							subject.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
						}
					} else
						subject.addComplement(word);
				}
			}
		}
		}else {
			subject.setHead("yo");
			subject.setFeature(Feature.PERSON, Person.FIRST);
		}
		return subject;
	}

	public NPPhraseSpec createObject(List<NLGElement> objectWords) {
		NPPhraseSpec object = null;
		object = factory.createNounPhrase();
		for (NLGElement word : objectWords) {
			if (word.isA(LexicalCategory.ADVERB)) {
				object.addPostModifier(word);
			} else {
				if (word.isA(LexicalCategory.NOUN)) {
					object.setHead(word);
					if (object.getDeterminer().size() == 0)
						object.setDeterminer("un");
					object.setPlural(word.isPlural());
					if (word.getFeature(LexicalFeature.GENDER) == Gender.FEMININE) {
						object.setFeature(LexicalFeature.GENDER, Gender.FEMININE);
					}
				} else {
					if (!word.isA(LexicalCategory.DETERMINER)) {
						object.addComplement(word);
					} else {
						object.setDeterminer(word.getAllFeatures().get("feminine_singular"));
					}
				}
			}
		}
		return object;
	}

	public String getOutput() {
		return output;
	}

}
