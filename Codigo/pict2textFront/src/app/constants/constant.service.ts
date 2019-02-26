import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

    static readonly pictoFinderURl = '/picto/getPicto?pictoName=';
    static readonly translatorPhraseURL = 'http://127.0.0.1:8080/apiNLG/createSimplePhrase';
    static readonly translatorPictoURL = '/translate/getPictoTranslate?pictoId=';
    static readonly typePhraseURL = '/translate/getTypePhrase';
    static readonly wordAttr = '/translate/getWordAttrs?word=';



}