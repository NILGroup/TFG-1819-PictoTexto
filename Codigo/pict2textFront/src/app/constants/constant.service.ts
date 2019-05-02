import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

    static readonly pictoFinderURl = 'picto/getPicto?pictoName=';
    static readonly translatorPhraseURL = 'http://127.0.0.1:8080/NLGWebService/createPhrase';
    static readonly translatorPictoURL = '/picto/getPictoTranslate?pictoId=';
    static readonly typePhraseURL = '/translate/getTypePhrase';
    static readonly wordAttr = '/translate/getWordAttrs?word=';
}