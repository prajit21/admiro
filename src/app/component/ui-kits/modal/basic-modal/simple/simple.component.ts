import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-simple',
    imports: [CommonModule],
    templateUrl: './simple.component.html',
    styleUrl: './simple.component.scss'
})
export class SimpleComponent {

  constructor(private modalService: NgbModal) { }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent);
  }

}
