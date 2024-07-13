import { Component } from '@angular/core';
import { ManageInvoice } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-invoice',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './manage-invoice.component.html',
  styleUrl: './manage-invoice.component.scss'
})
export class ManageInvoiceComponent {

  public MangeInvoice = ManageInvoice;

}
