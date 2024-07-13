import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-user-group-chat',
  standalone: true,
  imports: [CommonModule,ClickOutsideDirective,FeathericonComponent],
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
