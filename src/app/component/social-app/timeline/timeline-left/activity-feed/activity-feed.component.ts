import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.scss'
})
export class ActivityFeedComponent {

  public isCollapsed = false;
  public activityFeedData = data.activityFeedData;

}
