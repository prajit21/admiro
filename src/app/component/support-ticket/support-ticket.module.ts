import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportTicketRoutingModule } from './support-ticket-routing.module';

import { SupportTicketComponent } from './support-ticket.component';
import { SupportTicketDatatableComponent } from './support-ticket-datatable/support-ticket-datatable.component';
import { SupportTicketListComponent } from './support-ticket-list/support-ticket-list.component';

import { SupportTicketService } from '../../shared/services/support-ticket.service';

import { NgbdSortableHeader2 } from '../../shared/directives/support-ticket.directive';

@NgModule({
  declarations: [
    SupportTicketComponent,
    SupportTicketDatatableComponent,
    SupportTicketListComponent,
    NgbdSortableHeader2
  ],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SupportTicketService, DecimalPipe],
})
export class SupportTicketModule { }
