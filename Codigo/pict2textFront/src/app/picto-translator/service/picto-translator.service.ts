import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service'
import {AppConstants} from 'src/app/constants/constant.service'
@Injectable({
  providedIn: 'root'
})
export class PictoTranslatorService {


  constructor(private proxyService: ProxyService) { }

  
  getPictogramTranslate(name:string) {
    return new Promise((resolve, reject) => {
      this.proxyService.getByName(name, AppConstants.translatorPictoURL).subscribe(getPictoTranslateSuccess.bind(this),getPictoTranslateError)
      function getPictoTranslateSuccess(data){
        //LLAMADA AL TRANSFORMER
        resolve(data['meanings']);
      }
      function getPictoTranslateError(data){
        //TRAMAMIENTO DE ERRORES
        reject(data)
      }
  });
  }

}
