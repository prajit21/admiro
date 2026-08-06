import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-centered-modal',
  imports: [],
  templateUrl: './centered-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './centered-modal.scss',
})
export class CenteredModal {
  private modalService = inject(NgbModal);

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    this.modalService.open(CenteredContent, { centered: true });
  }
}
