import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './assets/error-modal.html',
})
export class ModalComponent  implements OnInit {
 
 
  constructor( public activeModal: NgbActiveModal ) {}

  ngOnInit() {
  }


}