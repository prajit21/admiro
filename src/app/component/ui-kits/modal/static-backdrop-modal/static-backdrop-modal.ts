import { CommonModule } from '@angular/common';
import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-backdrop-modal',
  imports: [CommonModule],
  templateUrl: './static-backdrop-modal.html',
  styleUrl: './static-backdrop-modal.scss',
})
export class StaticBackdropModal {
  private modalService = inject(NgbModal);

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    this.modalService.open(StaticBackdropContent, { centered: true });
  }
}
