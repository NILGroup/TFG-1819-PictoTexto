import { Injectable } from '@angular/core';
import { ProxyService} from 'src/app/utils/proxy/proxy-service.service'
import {AppConstants} from 'src/app/constants/constant.service'
import {FinderTransformer} from 'src/app/finder/transformer/finder-transformer.transformer'
import { Picto } from '../transformer/picto';

@Injectable()
export class FinderService {
  constructor(private proxyService: ProxyService, private finderTransformer :FinderTransformer) { }


  getPictByName(name:string) {
    return new Promise((resolve, reject) => {
      this.proxyService.getByName(name, AppConstants.pictoFinderURl).subscribe(getPictoSuccess.bind(this),getPictoError)
      
      function getPictoSuccess(data){
        //LLAMADA AL TRANSFORMER
        let transformed:Picto[]=this.finderTransformer.getPictoData(data);      
        if(transformed.length>0)
          resolve(transformed);
        reject({'status':404, 'statusText':'No se ha encontrado ningún pictograma'})

        }
      function getPictoError(data){
        //TRAMAMIENTO DE ERRORES
        reject(data)
      }

      

  });
  }
}


