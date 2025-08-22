import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-result-modal',
    imports: [CommonModule],
    templateUrl: './result-modal.html',
    styleUrl: './result-modal.scss'
})
export class ResultModal {

  private modalService = inject(NgbModal);

  ResultModal(resultcontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(resultcontant, { centered: true });
  }

}
