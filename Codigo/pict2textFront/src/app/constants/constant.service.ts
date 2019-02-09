import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

    static readonly pictoFinderURl = '/picto/getPicto?pictoName=';
    static readonly translatorPictoURL = '/pictoTranslate/getPictoTranslate?pictoId=';
    static readonly translatorPhraseURL = 'http://127.0.0.1:8080/apiNLG/createSimplePhrase';


}