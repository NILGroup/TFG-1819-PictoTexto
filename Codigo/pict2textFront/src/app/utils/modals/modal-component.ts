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
  }


}