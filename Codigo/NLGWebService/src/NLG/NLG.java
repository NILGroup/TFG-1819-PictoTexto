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
			case ("NUM"):
				aux = factory.createWord(words[i].getkeyword(), LexicalCategory.COMPLEMENTISER);
				aux.setPlural(words[i].getAttrs().getNumber());
				aux.setFeature("feminine_singular", words[i].getkeyword());
				break;
			}
			wordsList.add(aux);
		}
		return wordsList;
	}

	public int recogniseVerb(ArrayList<NLGElement> words) {
		int verbPosition = -1;
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
		boolean isPlural = false;

		if (!subjectWords.isEmpty()) {
			Gender isFeminine = Gender.MASCULINE;
			for (NLGElement word : subjectWords) {

				if (word.isPlural())
					isPlural = true;
				if (word.getFeature(LexicalFeature.GENDER) == Gender.FEMININE)
					isFeminine = Gender.FEMININE;

				if (word.isA(LexicalCategory.DETERMINER)) {
					subject.setDeterminer(word.getAllFeatures().get("feminine_singular"));
				} else if (word.isA(LexicalCategory.COMPLEMENTISER)) {
					subject.addPreModifier(word);
				} else if (word.isA(LexicalCategory.PRONOUN)) {
					word.setCategory(LexicalCategory.DETERMINER);
					subject.setDeterminer(word);
				} else if (word.isA(LexicalCategory.NOUN)) {
					subject.setNoun(word);
				} else if (word.isA(LexicalCategory.ADVERB)) {
					subject.addPostModifier(word);
				} else {
					subject.addComplement(word);
				}
			}

			if (subject.getDeterminer().size() == 0) {
				subject.setDeterminer("el");
			}
			subject.setPlural(isPlural);
			subject.setFeature(LexicalFeature.GENDER, isFeminine);

		} else {
			subject.setHead("yo");
			subject.setFeature(Feature.PERSON, Person.FIRST);
		}

		return subject;
	}

	public NPPhraseSpec createObject(List<NLGElement> objectWords, boolean isPlural, Gender isFeminine) {
		NPPhraseSpec object = factory.createNounPhrase();
		boolean existNoun = false;
		boolean addedNoun = false;

		for (NLGElement word : objectWords) {
			if (word.isPlural())
				isPlural = true;
			if (word.getFeature(LexicalFeature.GENDER) == Gender.FEMININE)
				isFeminine = Gender.FEMININE;
			
			if (word.isA(LexicalCategory.ADVERB)) {
				object.addPostModifier(word);
			} else if (word.isA(LexicalCategory.NOUN)) {
				existNoun = true;
				isFeminine = Gender.MASCULINE;
				if (!addedNoun) {
					object.setNoun(word);
					addedNoun = true;
				} else {
					object.setComplement(word);
				}
			} else if (word.isA(LexicalCategory.DETERMINER)) {
				object.setDeterminer(word.getAllFeatures().get("feminine_singular"));
			} else if (word.isA(LexicalCategory.PRONOUN)) {
				word.setCategory(LexicalCategory.DETERMINER);
				object.setDeterminer(word);
			} else if (word.isA(LexicalCategory.COMPLEMENTISER)) {
				object.addPreModifier(word);
			} else {
				object.addComplement(word);
			}
		}

		object.setPlural(isPlural && !existNoun );
		object.setFeature(LexicalFeature.GENDER, isFeminine);
		if (object.getDeterminer().size() == 0 && existNoun)
			object.setDeterminer("un");

		return object;
	}

	public String getOutput() {
		return output;
	}

}
