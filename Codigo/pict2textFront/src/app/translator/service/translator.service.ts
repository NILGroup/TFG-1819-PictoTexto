import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service';
import { AppConstants } from 'src/app/constants/constant.service';
import { Word } from '../transformer/word';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private proxyService: ProxyService) { }


  getPhraseType(words:Word[]) {

    return new Promise((resolve, reject) => {
    this.proxyService.postElement(AppConstants.typePhraseURL, words).subscribe(getPictogramTranslate.bind(this), getTranslateError);

    function getPictogramTranslate(data){
      switch(data.type){
        case('present'):
        this.proxyService.postElementWithOutCors(AppConstants.translatorPhraseURL, words).subscribe(getTranslateSuccess, getTranslateError);
        break;
        case('past'):
        this.proxyService.postElementWithOutCors(AppConstants.translatorPastPhraseURL, words).subscribe(getTranslateSuccess, getTranslateError);
        break;
        case('future'):
        this.proxyService.postElementWithOutCors(AppConstants.translatorFuturePhraseURL, words).subscribe(getTranslateSuccess, getTranslateError);
        break;
      }
    }

    function getTranslateSuccess(data) {
      // LLAMADA AL TRANSFORMER
      resolve(data);
    }
    function getTranslateError(data) {
      // TRAMAMIENTO DE ERRORES
      reject(data);
    }
  });
  }

}
