import { Component } from '@angular/core';
import { ManageInvoices } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-manage-invoice',
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './manage-invoice.html',
    styleUrl: './manage-invoice.scss'
})
export class ManageInvoice {

  public MangeInvoice = ManageInvoices;

}
