import { Component, Input } from '@angular/core';
import { ProxyService } from '../utils/proxy/proxy-service.service';
import { TranslatorService } from 'src/app/translator/service/translator.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Picto} from 'src/app/finder/transformer/picto'
import { Word } from './transformer/word';

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
  constructor(private translatorService: TranslatorService) {  
}

  getTranslate() {
    let words:Word[] =[], i=0;
    for(i=0;i<this.pictoPhrase.length;++i){
        words.push(new Word(this.pictoPhrase[i].keyword,this.pictoPhrase[i].attrs));
    }
    this.translatorService.getPictogramTranslate(words).then(this.getTranslateSucces.bind(this), this.getTranslateError);
  }


  remove(i){
     this.pictoPhrase.splice(i,1);
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
