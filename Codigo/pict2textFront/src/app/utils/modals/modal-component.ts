import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './assets/error-modal.html',
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openGeneralModalError(content) {
    this.modalService.open(content, { centered: true });
  }
}