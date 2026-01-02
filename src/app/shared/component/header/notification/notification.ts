
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClickOutsideDirective } from '../../../directives/outside.directive';

@Component({
  selector: 'app-notification',
  imports: [RouterModule, ClickOutsideDirective],
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class Notification {
  public notifications: boolean = false;

  notification() {
    this.notifications = !this.notifications;
  }

  clickOutside(): void {
    this.notifications = false;
  }
}
