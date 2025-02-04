import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivityTimeline } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-activity-timeline',
    imports: [CommonModule, ClickOutsideDirective],
    templateUrl: './activity-timeline.component.html',
    styleUrl: './activity-timeline.component.scss'
})
export class ActivityTimelineComponent {

  public activityTimeline = ActivityTimeline;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
