import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ticketListStatus } from '../../../shared/data/support-ticket/support-ticket';

@Component({
  selector: 'app-support-ticket-list',
  imports: [CommonModule],
  templateUrl: './support-ticket-list.html',
  styleUrl: './support-ticket-list.scss',
})
export class SupportTicketList {
  public ticketData = ticketListStatus;
}
