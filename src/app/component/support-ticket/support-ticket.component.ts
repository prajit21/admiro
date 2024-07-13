import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SupportTicketDatatableComponent } from './support-ticket-datatable/support-ticket-datatable.component';
import { SupportTicketListComponent } from './support-ticket-list/support-ticket-list.component';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [CommonModule, SupportTicketDatatableComponent, SupportTicketListComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.scss'
})
export class SupportTicketComponent {

}
