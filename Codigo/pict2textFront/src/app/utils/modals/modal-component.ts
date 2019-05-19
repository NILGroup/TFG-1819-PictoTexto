import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './assets/error-modal.html',
})
export class ModalComponent  implements OnInit {
 
  @Input() errorCode;
  @Input() errorText;
  constructor( public activeModal: NgbActiveModal ) {}

  ngOnInit() {

    if(this.errorText="OK"){
      switch(this.errorCode){

        case 404:
            this.errorText ="Recurso no encontrado"
            break;
        case 500:
            this.errorText="El servicio no está disponible, intentelo más tarde";
            break;
        default: 
          this.errorText ="Ha ocurrido un error, intentelo más tarde"
      }

    }
  }


}