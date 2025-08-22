import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { ModalData } from '../../../../../shared/data/ui-kits/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-scrolling-content',
    imports: [CommonModule],
    templateUrl: './scrolling-content.html',
    styleUrl: './scrolling-content.scss'
})
export class ScrollingContent {

  public scrollData = ModalData;
  private modalService = inject(NgbModal);

  scrollingModal(scrollingContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(scrollingContent);
  }

}
