import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice3TableComponent } from './invoice3-table/invoice3-table.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-3',
  standalone: true,
  imports: [CommonModule,Invoice3TableComponent,NgxPrintModule],
  templateUrl: './invoice-3.component.html',
  styleUrl: './invoice-3.component.scss'
})
export class Invoice3Component {

}
