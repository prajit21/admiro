import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { userStatus } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-user-status',
  imports: [RouterModule, ClickOutsideDirective],
  templateUrl: './user-status.html',
  styleUrl: './user-status.scss',
})
export class UserStatus {
  public UserStatus = userStatus;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
