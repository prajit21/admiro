import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fullscreen-sm-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-sm-modal.component.html',
    styleUrl: './fullscreen-sm-modal.component.scss'
})
export class FullscreenSmModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowSmModal(FullscreenbelowSmContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowSmContent, { size: 'sm' });
  }

}
