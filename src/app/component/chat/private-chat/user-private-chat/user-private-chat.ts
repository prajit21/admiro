import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';
import { CommonModule } from '@angular/common';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-user-private-chat',
    imports: [CommonModule, Feathericon, ClickOutsideDirective],
    templateUrl: './user-private-chat.html',
    styleUrl: './user-private-chat.scss'
})
export class UserPrivateChat {

  public MsgData = massage;
  public isopen:boolean = false;
  public isShow : boolean = false;

  open(){
   this.isopen = !this.isopen
  }
  
  clickOutside():void { 
    this.isopen = false;
  }
}
