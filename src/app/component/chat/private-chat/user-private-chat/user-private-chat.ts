import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { massage } from '../../../../shared/data/chat/chat';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-user-private-chat',
  imports: [CommonModule, Feathericon, ClickOutsideDirective],
  templateUrl: './user-private-chat.html',
  styleUrl: './user-private-chat.scss',
})
export class UserPrivateChat {
  public MsgData = massage;
  public isopen: boolean = false;
  public isShow: boolean = false;

  open() {
    this.isopen = !this.isopen;
  }

  clickOutside(): void {
    this.isopen = false;
  }
}
