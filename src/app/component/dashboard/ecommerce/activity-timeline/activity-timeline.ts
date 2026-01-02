
import { Component } from '@angular/core';

import { ActivityTimelines } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-activity-timeline',
  imports: [ClickOutsideDirective],
  templateUrl: './activity-timeline.html',
  styleUrl: './activity-timeline.scss',
})
export class ActivityTimeline {
  public activityTimeline = ActivityTimelines;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
