import { Component } from '@angular/core';
import { ManageInvoice } from '../../../../shared/data/dashboard/default/default';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-invoice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-invoice.component.html',
  styleUrl: './manage-invoice.component.scss'
})
export class ManageInvoiceComponent {

  public MangeInvoice = ManageInvoice;

}
