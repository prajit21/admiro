import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Chats, Contacts } from '../../../shared/data/chat/chat';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-contact-chat-tab',
  standalone: true,
  imports: [CommonModule,ContactSearchComponent,NgbModule,FeathericonComponent],
  templateUrl: './contact-chat-tab.component.html',
  styleUrl: './contact-chat-tab.component.scss'
})
export class ContactChatTabComponent {

  public active = 1;
  public privateData = Chats;
  public contactsData = Contacts;
  public openid: number;
  public isOpen: boolean = false;

  openMenu(id: number) {
    this.contactsData.filter(da => {
      if (da.id == id) {
        this.openid = this.openid !== da.id ? da.id : 0;
        this.isOpen = !this.isOpen
      }
    })
  }
}
