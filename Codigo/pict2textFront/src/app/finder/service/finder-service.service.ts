import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service'
import {AppConstants} from 'src/app/constants/constant.service'
import {FinderTransformer} from 'src/app/finder/transformer/finder-transformer.transformer'

@Injectable()
export class FinderService {
  constructor(private proxyService: ProxyService, private finderTransformer :FinderTransformer) { }


  getPictByName(name:string) {
    return new Promise((resolve, reject) => {
      this.proxyService.getByName(name, AppConstants.pictoFinderURl).subscribe(getPictoSuccess.bind(this),getPictoError)
      function getPictoSuccess(data){
        //LLAMADA AL TRANSFORMER
        resolve(this.finderTransformer.getPictoData(data));
      }
      function getPictoError(data){
        //TRAMAMIENTO DE ERRORES
        reject(data)
      }
  });
  }
}


