import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-md-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-md-modal.component.html',
    styleUrl: './fullscreen-md-modal.component.scss'
})
export class FullscreenMdModalComponent {
  
  constructor(private modalService: NgbModal) { }

  FullscreenbelowMdModal(FullscreenbelowMdContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowMdContent, { size: 'md' });
  }

}
