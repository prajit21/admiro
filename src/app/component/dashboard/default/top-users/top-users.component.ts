import { Component } from '@angular/core';
import { topUser } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-top-users',
    imports: [CommonModule, ClickOutsideDirective],
    templateUrl: './top-users.component.html',
    styleUrl: './top-users.component.scss'
})
export class TopUsersComponent {

  public TopUser = topUser;

  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
