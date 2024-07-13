import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-user-private-chat',
  standalone: true,
  imports: [CommonModule,FeathericonComponent,ClickOutsideDirective],
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
