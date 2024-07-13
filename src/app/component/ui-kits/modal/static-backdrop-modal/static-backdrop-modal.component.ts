import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-backdrop-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './static-backdrop-modal.component.html',
  styleUrl: './static-backdrop-modal.component.scss'
})
export class StaticBackdropModalComponent {

  constructor(private modalService: NgbModal) { }

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(StaticBackdropContent, { centered: true });
  }

}
