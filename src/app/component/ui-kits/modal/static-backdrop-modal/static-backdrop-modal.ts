import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-backdrop-modal',
  imports: [],
  templateUrl: './static-backdrop-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './static-backdrop-modal.scss',
})
export class StaticBackdropModal {
  private modalService = inject(NgbModal);

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    this.modalService.open(StaticBackdropContent, { centered: true });
  }
}
