import { Component, ChangeDetectionStrategy } from '@angular/core';

import { topUser } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-top-users',
  imports: [ClickOutsideDirective],
  templateUrl: './top-users.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './top-users.scss',
})
export class TopUsers {
  public TopUser = topUser;

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
