import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userStatus } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-user-status',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './user-status.html',
    styleUrl: './user-status.scss'
})
export class UserStatus {

  public UserStatus = userStatus;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
