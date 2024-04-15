import { Component } from '@angular/core';
import { ManageInvoice } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-manage-invoice',
  templateUrl: './manage-invoice.component.html',
  styleUrl: './manage-invoice.component.scss'
})
export class ManageInvoiceComponent {


  public MangeInvoice = ManageInvoice;

}
