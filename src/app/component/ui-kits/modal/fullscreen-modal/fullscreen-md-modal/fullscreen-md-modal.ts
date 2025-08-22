import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-md-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-md-modal.html',
    styleUrl: './fullscreen-md-modal.scss'
})
export class FullscreenMdModal {
  
  private modalService = inject(NgbModal);

  FullscreenbelowMdModal(FullscreenbelowMdContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowMdContent, { size: 'md' });
  }

}
