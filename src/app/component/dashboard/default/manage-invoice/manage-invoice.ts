
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ManageInvoices } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-manage-invoice',
  imports: [FormsModule, RouterModule],
  templateUrl: './manage-invoice.html',
  styleUrl: './manage-invoice.scss',
})
export class ManageInvoice {
  public MangeInvoice = ManageInvoices;
}
