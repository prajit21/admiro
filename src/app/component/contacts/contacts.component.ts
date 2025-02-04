import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactSidebarComponent } from './contact-sidebar/contact-sidebar.component';

@Component({
    selector: 'app-contacts',
    imports: [CommonModule, ContactSidebarComponent],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss'
})
export class ContactsComponent {


}
