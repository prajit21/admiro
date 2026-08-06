import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UserGroupChat } from './user-group-chat/user-group-chat';
import { ContactChatTab } from '../contact-chat-tab/contact-chat-tab';

@Component({
  selector: 'app-group-chat',
  imports: [UserGroupChat, ContactChatTab],
  templateUrl: './group-chat.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './group-chat.scss',
})
export class GroupChat {}
