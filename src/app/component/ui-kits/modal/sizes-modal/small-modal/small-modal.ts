import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-small-modal',
    imports: [CommonModule],
    templateUrl: './small-modal.html',
    styleUrl: './small-modal.scss'
})
export class SmallModal {

  private modalService = inject(NgbModal);

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(smallContent, { size: 'sm' });
  }


}
