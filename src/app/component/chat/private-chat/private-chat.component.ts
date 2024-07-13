import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactChatTabComponent } from '../contact-chat-tab/contact-chat-tab.component';
import { UserPrivateChatComponent } from './user-private-chat/user-private-chat.component';

@Component({
  selector: 'app-private-chat',
  standalone: true,
  imports: [CommonModule,ContactChatTabComponent,UserPrivateChatComponent],
  templateUrl: './private-chat.component.html',
  styleUrl: './private-chat.component.scss'
})
export class PrivateChatComponent {

}
