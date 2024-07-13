import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-balance-modal',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './balance-modal.component.html',
  styleUrl: './balance-modal.component.scss'
})
export class BalanceModalComponent {

  constructor(private modalService: NgbModal) { }

  BalanceModal(Balancecontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(Balancecontant, { centered: true });
  }

}
