import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyProfile } from './my-profile/my-profile';
import { ActivityFeed } from './activity-feed/activity-feed';
import { MutualFriends } from './mutual-friends/mutual-friends';

@Component({
    selector: 'app-timeline-left',
    imports: [CommonModule, MyProfile, ActivityFeed, MutualFriends],
    templateUrl: './timeline-left.html',
    styleUrl: './timeline-left.scss'
})
export class TimelineLeft {

}
