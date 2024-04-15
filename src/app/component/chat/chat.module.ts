import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

import { PrivateChatComponent } from './private-chat/private-chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ContactChatTabComponent } from './contact-chat-tab/contact-chat-tab.component';
import { ContactSearchComponent } from './contact-chat-tab/contact-search/contact-search.component';
import { UserGroupChatComponent } from './group-chat/user-group-chat/user-group-chat.component';
import { UserPrivateChatComponent } from './private-chat/user-private-chat/user-private-chat.component';

@NgModule({
  declarations: [
    PrivateChatComponent,
    GroupChatComponent,
    ContactChatTabComponent,
    ContactSearchComponent,
    UserGroupChatComponent,
    UserPrivateChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
