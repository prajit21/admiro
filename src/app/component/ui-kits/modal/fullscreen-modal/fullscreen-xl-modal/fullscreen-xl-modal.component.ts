import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-xl-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-xl-modal.component.html',
    styleUrl: './fullscreen-xl-modal.component.scss'
})
export class FullscreenXlModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowXlModal(FullscreenbelowXlContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowXlContent, { size: 'xl' });
  }

}
