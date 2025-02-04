import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice2TableComponent } from './invoice2-table/invoice2-table.component';
import { Invoice2TotalComponent } from './invoice2-total/invoice2-total.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice-2',
    imports: [CommonModule, Invoice2TableComponent, Invoice2TotalComponent, NgxPrintModule],
    templateUrl: './invoice-2.component.html',
    styleUrl: './invoice-2.component.scss'
})
export class Invoice2Component {

}
