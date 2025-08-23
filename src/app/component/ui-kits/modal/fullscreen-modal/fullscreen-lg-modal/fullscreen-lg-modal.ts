import { CommonModule } from '@angular/common';
import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-lg-modal',
  imports: [CommonModule],
  templateUrl: './fullscreen-lg-modal.html',
  styleUrl: './fullscreen-lg-modal.scss',
})
export class FullscreenLgModal {
  private modalService = inject(NgbModal);

  FullscreenbelowLgModal(FullscreenbelowLgContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowLgContent, { size: 'lg' });
  }
}
