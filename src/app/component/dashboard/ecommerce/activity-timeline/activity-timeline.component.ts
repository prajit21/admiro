import { Component } from '@angular/core';
import { ActivityTimeline } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrl: './activity-timeline.component.scss'
})
export class ActivityTimelineComponent {

  public activityTimeline = ActivityTimeline;

}
