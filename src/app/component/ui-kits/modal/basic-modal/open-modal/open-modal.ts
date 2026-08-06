import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './open-modal.scss',
})
export class OpenModal {
  public validate = false;

  private modalService = inject(NgbModal);

  public submit() {
    this.validate = !this.validate;
    this.validate = true;
  }

  OpenModal(openmodal: TemplateRef<NgbModal>) {
    this.modalService.open(openmodal);
  }
}
