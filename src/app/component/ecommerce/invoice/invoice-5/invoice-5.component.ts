import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice5TableComponent } from './invoice5-table/invoice5-table.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
    selector: 'app-invoice-5',
    imports: [CommonModule, Invoice5TableComponent, NgxPrintModule],
    templateUrl: './invoice-5.component.html',
    styleUrl: './invoice-5.component.scss'
})
export class Invoice5Component {

}
