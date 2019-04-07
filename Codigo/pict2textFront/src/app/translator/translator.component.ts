import { Component, Input } from '@angular/core';
import { ProxyService } from '../utils/proxy/proxy-service.service';
import { TranslatorService } from 'src/app/translator/service/translator.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Picto} from 'src/app/finder/transformer/picto'
import { ModalComponent } from '../utils/modals/modal-component'
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-translator',
  templateUrl: './assets/translator.component.html',
  providers: [TranslatorService, ProxyService],
  styleUrls: ['./assets/translator.component.css']
})

export class TranslatorComponent {

  finalPhrase: string;
  @Input() pictoPhrase:Picto[];
  constructor(private translatorService: TranslatorService, private modalService: NgbModal) {  
}

  getTranslate() {
    let words:String[] =[], i=0;
    for(i=0;i<this.pictoPhrase.length;++i){
        words.push(this.pictoPhrase[i].keyword);
    }
    this.translatorService.getPhrase(words).then(this.getTranslateSucces.bind(this), this.getTranslateError.bind(this));
  }


  remove(i){
     this.pictoPhrase.splice(i,1);
  }

  getTranslateSucces(data) {
    this.finalPhrase = data;
  }

  getTranslateError(data) {
      const activeModal = this.modalService.open(ModalComponent);
      activeModal.componentInstance.errorCode=data.status;
      activeModal.componentInstance.errorText=data.statusText;
  
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pictoPhrase, event.previousIndex, event.currentIndex);
  }



}
