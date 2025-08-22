import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice2Table } from './invoice2-table/invoice2-table';
import { Invoice2Total } from './invoice2-total/invoice2-total';
import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice-2',
    imports: [CommonModule, Invoice2Table, Invoice2Total, NgxPrintModule],
    templateUrl: './invoice-2.html',
    styleUrl: './invoice-2.scss'
})
export class Invoice2 {

}
