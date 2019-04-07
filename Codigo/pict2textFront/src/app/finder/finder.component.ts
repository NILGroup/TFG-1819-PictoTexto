import { Component, Input } from '@angular/core';
import {FinderService} from 'src/app/finder/service/finder-service.service'
import {Picto} from 'src/app/finder/transformer/picto'
import { ProxyService } from '../utils/proxy/proxy-service.service';
import { ModalComponent } from '../utils/modals/modal-component'
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FinderTransformer} from 'src/app/finder/transformer/finder-transformer.transformer'
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-finder',
  templateUrl: './assets/finder.component.html',
  providers: [FinderService,FinderTransformer,NgbCarouselConfig, ProxyService],
  styleUrls: ['./assets/finder.component.css']
})
export class FinderComponent {
  myPicto:Picto[];
  @Input() pictoPhrase:Picto[];
  
  
  constructor( private pictoService : FinderService, config: NgbCarouselConfig, private modalService: NgbModal) {
    config.interval=0;
  }

   getPictosByName(name:string){
    this.pictoService.getPictByName(name).then(this.getPictoSucces.bind(this), this.getPictoError.bind(this));
  }

   getPictoSucces(data){
    this.myPicto=data;
  }

    addPicto(picto : Picto){
      this.pictoPhrase.push(picto);
    }

   getPictoError(data){
    const activeModal = this.modalService.open(ModalComponent);
    activeModal.componentInstance.errorCode=data.status;
    activeModal.componentInstance.errorText=data.statusText;
  }

  
}
