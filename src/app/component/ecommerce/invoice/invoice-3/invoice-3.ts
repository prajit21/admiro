import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice3Table } from './invoice3-table/invoice3-table';
import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice-3',
    imports: [CommonModule, Invoice3Table, NgxPrintModule],
    templateUrl: './invoice-3.html',
    styleUrl: './invoice-3.scss'
})
export class Invoice3 {

}
