import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-sm-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-sm-modal.html',
    styleUrl: './fullscreen-sm-modal.scss'
})
export class FullscreenSmModal {

  private modalService = inject(NgbModal);

  FullscreenbelowSmModal(FullscreenbelowSmContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowSmContent, { size: 'sm' });
  }

}
