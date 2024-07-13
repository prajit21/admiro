import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-result-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.scss'
})
export class ResultModalComponent {

  constructor(private modalService: NgbModal) { }

  ResultModal(resultcontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(resultcontant, { centered: true });
  }

}
