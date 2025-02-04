import { Component, TemplateRef } from '@angular/core';
import { ModalData } from '../../../../../shared/data/ui-kits/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-fullscreen-simple-modal',
    imports: [CommonModule],
    templateUrl: './fullscreen-simple-modal.component.html',
    styleUrl: './fullscreen-simple-modal.component.scss'
})
export class FullscreenSimpleModalComponent {

  public FullscreenData = ModalData;
  constructor(private modalService: NgbModal) { }

  FullscreenbelowModal(FullscreenbelowContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowContent, { fullscreen: true });
  }

}
