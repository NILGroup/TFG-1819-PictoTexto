import { Component, OnInit } from '@angular/core';
import { Phrase } from './transformer/phrase';
import { ProxyService } from '../utils/proxy/proxy-service.service';
import { TranslatorService } from 'src/app/translator/service/translator.service';

@Component({
  selector: 'app-translator',
  templateUrl: './assets/translator.component.html',
  providers: [TranslatorService, ProxyService],
  styleUrls: ['./assets/translator.component.css']
})

export class TranslatorComponent {

  phrase: Phrase = new Phrase();
  finalPhrase: string;
  constructor(private translatorService: TranslatorService) { }

  getTranslate() {
    this.translatorService.getPictogramTranslate(this.phrase).then(this.getTranslateSucces.bind(this), this.getTranslateError);
  }


  getTranslateSucces(data) {
    this.finalPhrase = data;
  }

  getTranslateError(data) {
    console.log(data);
    console.log('todo mal en el componente');
  }

}
