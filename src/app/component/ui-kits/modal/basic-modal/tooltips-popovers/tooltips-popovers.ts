import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tooltips-popovers',
    imports: [CommonModule],
    templateUrl: './tooltips-popovers.html',
    styleUrl: './tooltips-popovers.scss'
})
export class TooltipsPopovers {

  private modalService = inject(NgbModal);

  tooltipModal(tooltipmodalContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(tooltipmodalContent);
  }

}
