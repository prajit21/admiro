import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';

@Component({
  selector: 'app-user-private-chat',
  templateUrl: './user-private-chat.component.html',
  styleUrl: './user-private-chat.component.scss'
})
export class UserPrivateChatComponent {

  public MsgData = massage;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }
  
  clickOutside():void { 
    this.isopen = false;
  }
}
