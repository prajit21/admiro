import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ticketListStatus } from '../../../shared/data/support-ticket/support-ticket';

@Component({
    selector: 'app-support-ticket-list',
    imports: [CommonModule],
    templateUrl: './support-ticket-list.component.html',
    styleUrl: './support-ticket-list.component.scss'
})
export class SupportTicketListComponent {

  public ticketData = ticketListStatus;

}
