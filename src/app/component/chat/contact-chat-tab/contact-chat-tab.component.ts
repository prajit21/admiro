import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { Chats, Contacts } from '../../../shared/data/chat/chat';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { ContactSearchComponent } from './contact-search/contact-search.component';

@Component({
    selector: 'app-contact-chat-tab',
    imports: [CommonModule, ContactSearchComponent, NgbModule, FeathericonComponent, ClickOutsideDirective],
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
    this.contactsData.filter(data => {
      data.item.forEach(element => {
        if (element.id === id) {
          element.isShow = !element.isShow;
        }
      });
    })
  }
}
