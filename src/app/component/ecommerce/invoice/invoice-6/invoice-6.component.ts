import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice6TableComponent } from './invoice6-table/invoice6-table.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-6',
  standalone: true,
  imports: [CommonModule,Invoice6TableComponent,NgxPrintModule],
  templateUrl: './invoice-6.component.html',
  styleUrl: './invoice-6.component.scss'
})
export class Invoice6Component {

}
