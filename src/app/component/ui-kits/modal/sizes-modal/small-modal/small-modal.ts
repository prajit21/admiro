import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-small-modal',
  imports: [],
  templateUrl: './small-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './small-modal.scss',
})
export class SmallModal {
  private modalService = inject(NgbModal);

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    this.modalService.open(smallContent, { size: 'sm' });
  }
}
