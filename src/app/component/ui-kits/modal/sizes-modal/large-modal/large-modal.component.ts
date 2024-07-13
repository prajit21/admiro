import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-large-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './large-modal.component.html',
  styleUrl: './large-modal.component.scss'
})
export class LargeModalComponent {

  constructor(private modalService: NgbModal) { }

  LargeModal(largeContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(largeContent, { size: 'lg' });
  }

}
