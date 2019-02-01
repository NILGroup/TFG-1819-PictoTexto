import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service';
import { AppConstants } from 'src/app/constants/constant.service';
import { Phrase } from '../transformer/phrase';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private proxyService: ProxyService) { }

  getPictogramTranslate(name: Phrase) {
    return new Promise((resolve, reject) => {
      this.proxyService.postElement(AppConstants.translatorPhraseURL, name)
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
