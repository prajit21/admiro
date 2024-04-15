import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableRoutingModule } from './data-table-routing.module';

import { DataTableComponent } from './data-table.component';

import { NgbdSortableHeader } from '../../../shared/directives/sortable.directive';

@NgModule({
  declarations: [
    DataTableComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule 
  ]
})
export class DataTableModule { }
