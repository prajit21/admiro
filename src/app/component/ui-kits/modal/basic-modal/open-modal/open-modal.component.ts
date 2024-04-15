import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrl: './open-modal.component.scss'
})
export class OpenModalComponent {

  public validate = false;

  constructor(private modalService: NgbModal) { }

  public submit() {
    this.validate = !this.validate;
    this.validate = true;
  }

  OpenModal(openmodal: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(openmodal);
  }

}
