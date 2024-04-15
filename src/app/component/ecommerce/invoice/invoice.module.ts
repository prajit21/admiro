import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { Invoice1Component } from './invoice-1/invoice-1.component';
import { Invoice1TableComponent } from './invoice-1/invoice1-table/invoice1-table.component';
import { Invoice2Component } from './invoice-2/invoice-2.component';
import { Invoice2TableComponent } from './invoice-2/invoice2-table/invoice2-table.component';
import { Invoice3Component } from './invoice-3/invoice-3.component';
import { Invoice3TableComponent } from './invoice-3/invoice3-table/invoice3-table.component';
import { Invoice2TotalComponent } from './invoice-2/invoice2-total/invoice2-total.component';
import { Invoice4Component } from './invoice-4/invoice-4.component';
import { Invoice4TableComponent } from './invoice-4/invoice4-table/invoice4-table.component';
import { Invoice5Component } from './invoice-5/invoice-5.component';
import { Invoice5TableComponent } from './invoice-5/invoice5-table/invoice5-table.component';
import { Invoice6Component } from './invoice-6/invoice-6.component';
import { Invoice6TableComponent } from './invoice-6/invoice6-table/invoice6-table.component';

@NgModule({
  declarations: [
    Invoice1Component,
    Invoice1TableComponent,
    Invoice2Component,
    Invoice2TableComponent,
    Invoice3Component,
    Invoice3TableComponent,
    Invoice2TotalComponent,
    Invoice4Component,
    Invoice4TableComponent,
    Invoice5Component,
    Invoice5TableComponent,
    Invoice6Component,
    Invoice6TableComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NgxPrintModule
  ]
})
export class InvoiceModule { }
