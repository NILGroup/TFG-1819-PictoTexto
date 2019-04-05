import spacy


class SpacyIMP:
    NLP =None;

    @staticmethod
    def __getModel__():
        if not SpacyIMP.NLP:
            SpacyIMP.NLP = spacy.load('es_core_news_md')
        return SpacyIMP.NLP;
