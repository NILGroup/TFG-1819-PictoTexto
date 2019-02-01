import { Component } from '@angular/core';
import {PictoTranslatorService} from 'src/app/picto-translator/service/picto-translator.service'
import { ProxyService } from '../utils/proxy/proxy-service.service';

@Component({
  selector: 'app-picto-translator',
  templateUrl: './assets/picto-translator.component.html',
  providers: [PictoTranslatorService, ProxyService],
  styleUrls: ['./assets/picto-translator.component.css']
})
export class PictoTranslatorComponent{
  translates:string;
  constructor(private pictoTranslatorService :PictoTranslatorService  ) { }

  getPictosTranslate(name:string){
    this.pictoTranslatorService.getPictogramTranslate(name).then(this.getPictoTranslateSucces.bind(this), this.getPictoTranslateError);
  }

  getPictoTranslateSucces(data){
    this.translates=data['meanings'];
  }

  getPictoTranslateError(){
    console.log("todo mal en el componente")
  }
}
