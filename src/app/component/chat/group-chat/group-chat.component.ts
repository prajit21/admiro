import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserGroupChatComponent } from './user-group-chat/user-group-chat.component';
import { ContactChatTabComponent } from '../contact-chat-tab/contact-chat-tab.component';

@Component({
    selector: 'app-group-chat',
    imports: [CommonModule, UserGroupChatComponent, ContactChatTabComponent,],
    templateUrl: './group-chat.component.html',
    styleUrl: './group-chat.component.scss'
})
export class GroupChatComponent {

}
