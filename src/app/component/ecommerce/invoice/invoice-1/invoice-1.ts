import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgxPrintModule } from 'ngx-print';

import { Invoice1Table } from './invoice1-table/invoice1-table';

@Component({
  selector: 'app-invoice-1',
  imports: [CommonModule, Invoice1Table, NgxPrintModule],
  templateUrl: './invoice-1.html',
  styleUrl: './invoice-1.scss',
})
export class Invoice1 {}
