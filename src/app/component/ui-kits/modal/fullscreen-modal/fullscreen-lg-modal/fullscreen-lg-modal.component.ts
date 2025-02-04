import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-lg-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-lg-modal.component.html',
    styleUrl: './fullscreen-lg-modal.component.scss'
})
export class FullscreenLgModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowLgModal(FullscreenbelowLgContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowLgContent, { size: 'lg' });
  }


}
