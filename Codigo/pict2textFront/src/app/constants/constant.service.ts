import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

    static readonly pictoFinderURl = '/tfg-pict2text/picto/getPicto?pictoName=';
    static readonly translatorPhraseURL = 'http://127.0.0.1:8080/NLGWebService/createPhrase';
    static readonly translatorPictoURL = '/tfg-pict2text/picto/getPictoTranslate?pictoId=';
    static readonly typePhraseURL = '/tfg-pict2text//translate/getTypePhrase';
    static readonly wordAttr = '/tfg-pict2text/translate/getWordAttrs?word=';
}