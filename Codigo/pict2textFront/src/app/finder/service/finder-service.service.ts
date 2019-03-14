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
        this.proxyService.getByName(name,AppConstants.wordAttr).subscribe(getAttrsSuccess.bind(this),getPictoError)
        
        
        function getAttrsSuccess(data){
          let i=0;
          for( i=0;i<transformed.length;++i){
            transformed[i].attrs=data.attrs;
          }
          resolve(transformed);
        }
      }
      function getPictoError(data){
        //TRAMAMIENTO DE ERRORES
        reject(data)
      }

      

  });
  }
}


