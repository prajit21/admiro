import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice5Table } from './invoice5-table/invoice5-table';
import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice-5',
    imports: [CommonModule, Invoice5Table, NgxPrintModule],
    templateUrl: './invoice-5.html',
    styleUrl: './invoice-5.scss'
})
export class Invoice5 {

}
