import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';

@Component({
  selector: 'app-user-group-chat',
  templateUrl: './user-group-chat.component.html',
  styleUrl: './user-group-chat.component.scss'
})
export class UserGroupChatComponent {

  public MsgData = massage;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }
  
  clickOutside():void { 
    this.isopen = false;
  }
}
