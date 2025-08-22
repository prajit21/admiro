import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-xl-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-xl-modal.html',
    styleUrl: './fullscreen-xl-modal.scss'
})
export class FullscreenXlModal {

  private modalService = inject(NgbModal);

  FullscreenbelowXlModal(FullscreenbelowXlContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowXlContent, { size: 'xl' });
  }

}
