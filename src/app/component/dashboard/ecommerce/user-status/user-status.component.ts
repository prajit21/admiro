import { Component } from '@angular/core';
import { userStatus } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss'
})
export class UserStatusComponent {

  public UserStatus = userStatus;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
