import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service';
import { AppConstants } from 'src/app/constants/constant.service';
import { Word } from '../transformer/word';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private proxyService: ProxyService) { }

  getPictogramTranslate(words: Word[]) {
    return new Promise((resolve, reject) => {
      this.proxyService.postElement(AppConstants.translatorPhraseURL, words)
      .subscribe(getTranslateSuccess, getTranslateError);
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


  
  getPhraseType(words) {
    return new Promise((resolve, reject) => {
      this.proxyService.postElement(AppConstants.typePhraseURL, words)
      .subscribe(getTranslateSuccess, getTranslateError);
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
