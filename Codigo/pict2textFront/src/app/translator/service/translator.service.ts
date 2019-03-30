import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service';
import { AppConstants } from 'src/app/constants/constant.service';
import { Word } from '../transformer/word';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private proxyService: ProxyService) { }


  getPhrase(words:String[]) {

    return new Promise((resolve, reject) => {
    
    this.proxyService.postElementWithOutCors(AppConstants.translatorPhraseURL, words).subscribe(getTranslateSuccess, getTranslateError);

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
