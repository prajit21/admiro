import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  public notifications: boolean = false;

  notification() {
    this.notifications = !this.notifications
  }

  clickOutside():void { 
    this.notifications = false;
  }

}
