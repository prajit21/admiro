import { CommonModule } from '@angular/common';
import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-large-modal',
  imports: [CommonModule],
  templateUrl: './large-modal.html',
  styleUrl: './large-modal.scss',
})
export class LargeModal {
  private modalService = inject(NgbModal);

  LargeModal(largeContent: TemplateRef<NgbModal>) {
    this.modalService.open(largeContent, { size: 'lg' });
  }
}
