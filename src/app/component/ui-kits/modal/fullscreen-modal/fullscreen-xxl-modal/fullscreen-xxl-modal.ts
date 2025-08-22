import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-xxl-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-xxl-modal.html',
    styleUrl: './fullscreen-xxl-modal.scss'
})
export class FullscreenXxlModal {

  private modalService = inject(NgbModal);

  FullscreenbelowXxlModal(FullscreenbelowXxlContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowXxlContent, { size: 'xxl' });
  }


}
