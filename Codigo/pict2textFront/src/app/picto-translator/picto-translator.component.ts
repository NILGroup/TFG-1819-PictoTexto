import { Component } from '@angular/core';
import {PictoTranslatorService} from 'src/app/picto-translator/service/picto-translator.service'
import { ProxyService } from '../utils/proxy/proxy-service.service';
import { ModalComponent } from '../utils/modals/modal-component'
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-picto-translator',
  templateUrl: './assets/picto-translator.component.html',
  providers: [PictoTranslatorService, ProxyService],
  styleUrls: ['./assets/picto-translator.component.css']
})
export class PictoTranslatorComponent{
  translates:string;
  constructor(private pictoTranslatorService :PictoTranslatorService,private modalService: NgbModal  ) { }

  getPictosTranslate(name:string){
    this.pictoTranslatorService.getPictogramTranslate(name).then(this.getPictoTranslateSucces.bind(this), this.getPictoTranslateError.bind(this));
  }

  getPictoTranslateSucces(data){
    this.translates=data['meanings'];
  }

  getPictoTranslateError(data){
    const activeModal = this.modalService.open(ModalComponent);
    activeModal.componentInstance.errorCode=data.status;
    activeModal.componentInstance.errorText=data.statusText;  }
}
