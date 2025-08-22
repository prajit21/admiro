import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice6Table } from './invoice6-table/invoice6-table';
import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice-6',
    imports: [CommonModule, Invoice6Table, NgxPrintModule],
    templateUrl: './invoice-6.html',
    styleUrl: './invoice-6.scss'
})
export class Invoice6 {

}
