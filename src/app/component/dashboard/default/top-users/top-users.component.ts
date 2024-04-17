import { Component } from '@angular/core';
import { topUser } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-top-users',
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
