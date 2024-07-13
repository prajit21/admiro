import { Routes } from '@angular/router';
import { SupportTicketComponent } from './support-ticket.component';

export const SupportTicket: Routes = [
    {
        path: '',
        component: SupportTicketComponent,
        data: {
            breadcrumb: 'Support Ticket'
        },
    }
];