import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LatestActivity } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-letest-activity',
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: './letest-activity.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './letest-activity.scss',
})
export class LetestActivity {
  public letestActivity = LatestActivity;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
