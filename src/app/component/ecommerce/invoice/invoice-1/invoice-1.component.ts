import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Invoice1TableComponent } from './invoice1-table/invoice1-table.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-1',
  standalone: true,
  imports: [CommonModule,Invoice1TableComponent,NgxPrintModule],
  templateUrl: './invoice-1.component.html',
  styleUrl: './invoice-1.component.scss'
})
export class Invoice1Component {

}
