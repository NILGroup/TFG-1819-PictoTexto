import { Component } from '@angular/core';
import {FinderService} from 'src/app/finder/service/finder-service.service'
import {Picto} from 'src/app/finder/transformer/picto'
import { ProxyService } from '../utils/proxy/proxy-service.service';
import {FinderTransformer} from 'src/app/finder/transformer/finder-transformer.transformer'

@Component({
  selector: 'app-finder',
  templateUrl: './assets/finder.component.html',
  providers: [FinderService,FinderTransformer, ProxyService],
  styleUrls: ['./assets/finder.component.css']
})
export class FinderComponent  {
  myPicto:Picto[]
  constructor( private pictoService : FinderService) {}

   getPictosByName(name:string){
    this.pictoService.getPictByName(name).then(this.getPictoSucces.bind(this), this.getPictoError);
  }

   getPictoSucces(data){
    this.myPicto=data;
  }

   getPictoError(){
    console.log("todo mal en el componente")
  }

  
}
