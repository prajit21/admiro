import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips-popovers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltips-popovers.component.html',
  styleUrl: './tooltips-popovers.component.scss'
})
export class TooltipsPopoversComponent {

  constructor(private modalService: NgbModal) { }

  tooltipModal(tooltipmodalContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(tooltipmodalContent);
  }

}
