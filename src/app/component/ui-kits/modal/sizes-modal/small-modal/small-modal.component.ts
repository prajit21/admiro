import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-small-modal',
    imports: [CommonModule],
    templateUrl: './small-modal.component.html',
    styleUrl: './small-modal.component.scss'
})
export class SmallModalComponent {

  constructor(private modalService: NgbModal) { }

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(smallContent, { size: 'sm' });
  }


}
