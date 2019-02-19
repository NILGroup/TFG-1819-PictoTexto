import { Component, Input } from '@angular/core';
import { ProxyService } from '../utils/proxy/proxy-service.service';
import { TranslatorService } from 'src/app/translator/service/translator.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Picto} from 'src/app/finder/transformer/picto'

@Component({
  selector: 'app-translator',
  templateUrl: './assets/translator.component.html',
  providers: [TranslatorService, ProxyService],
  styleUrls: ['./assets/translator.component.css']
})

export class TranslatorComponent {

  phrase: string;
  finalPhrase: string;
  @Input() pictoPhrase:Picto[];
  constructor(private translatorService: TranslatorService) { }

  getTranslate() {
    let words=[], img;
    
    for(img in this.pictoPhrase ){
        words.push(img.keyword)
    }
    this.translatorService.getPictogramTranslate(words).then(this.getTranslateSucces.bind(this), this.getTranslateError);
  }


  getTranslateSucces(data) {
    this.finalPhrase = data;
  }

  getTranslateError(data) {
    console.log(data);
    console.log('todo mal en el componente');
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pictoPhrase, event.previousIndex, event.currentIndex);
  }

}
