import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { MutualFriendsComponent } from './mutual-friends/mutual-friends.component';

@Component({
  selector: 'app-timeline-left',
  standalone: true,
  imports: [CommonModule,MyProfileComponent,ActivityFeedComponent,MutualFriendsComponent],
  templateUrl: './timeline-left.component.html',
  styleUrl: './timeline-left.component.scss'
})
export class TimelineLeftComponent {

}
