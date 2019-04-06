import { Injectable } from '@angular/core';
import { Picto } from './picto';

@Injectable()
export class FinderTransformer {
    getPictoData(data:Object) {
        let myPicto:Picto[] =[ ];
        let i=0;
        for(i=0; i<data['pictos'].length;++i)  
            myPicto.push(new Picto(data['pictos'][i].id, data['pictos'][i].url,data['pictos'][i].keyWords));
        return myPicto;
    }

}