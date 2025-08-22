import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-centered-modal',
    imports: [CommonModule],
    templateUrl: './centered-modal.html',
    styleUrl: './centered-modal.scss'
})
export class CenteredModal {

  private modalService = inject(NgbModal);

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(CenteredContent, { centered: true });
  }


}
