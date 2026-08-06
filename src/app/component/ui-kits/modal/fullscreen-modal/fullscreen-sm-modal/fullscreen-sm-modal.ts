import { Component, TemplateRef, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-sm-modal',
  imports: [],
  templateUrl: './fullscreen-sm-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './fullscreen-sm-modal.scss',
})
export class FullscreenSmModal {
  private modalService = inject(NgbModal);

  FullscreenbelowSmModal(FullscreenbelowSmContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowSmContent, { size: 'sm' });
  }
}
