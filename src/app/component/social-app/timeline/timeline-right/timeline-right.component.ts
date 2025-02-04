import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FollowersComponent } from './followers/followers.component';
import { FollwingsComponent } from './follwings/follwings.component';
import { FriendsProfileComponent } from './friends-profile/friends-profile.component';
import { LatestPhotosComponent } from './latest-photos/latest-photos.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';

@Component({
    selector: 'app-timeline-right',
    imports: [CommonModule, FollowersComponent, FollwingsComponent, FriendsProfileComponent,
        LatestPhotosComponent, ProfileIntroComponent],
    templateUrl: './timeline-right.component.html',
    styleUrl: './timeline-right.component.scss'
})
export class TimelineRightComponent {

}
