import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { SocialAppRoutingModule } from './social-app-routing.module';
import { UserModule } from '../user/user.module';

import { AboutComponent } from './about/about.component';
import { SocialAppComponent } from './social-app.component';
import { AboutCenterComponent } from './about/about-center/about-center.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineCenterComponent } from './timeline/timeline-center/timeline-center.component';
import { CommentOneComponent } from './timeline/timeline-center/comment-one/comment-one.component';
import { CommentTwoComponent } from './timeline/timeline-center/comment-two/comment-two.component';
import { TimelineLeftComponent } from './timeline/timeline-left/timeline-left.component';
import { ActivityFeedComponent } from './timeline/timeline-left/activity-feed/activity-feed.component';
import { MutualFriendsComponent } from './timeline/timeline-left/mutual-friends/mutual-friends.component';
import { MyProfileComponent } from './timeline/timeline-left/my-profile/my-profile.component';
import { TimelineRightComponent } from './timeline/timeline-right/timeline-right.component';
import { FollowersComponent } from './timeline/timeline-right/followers/followers.component';
import { FollwingsComponent } from './timeline/timeline-right/follwings/follwings.component';
import { FriendsProfileComponent } from './timeline/timeline-right/friends-profile/friends-profile.component';
import { LatestPhotosComponent } from './timeline/timeline-right/latest-photos/latest-photos.component';
import { ProfileIntroComponent } from './timeline/timeline-right/profile-intro/profile-intro.component';
import { SoicalProfileComponent } from './soical-profile/soical-profile.component';
import { ActivityLogComponent } from './about/about-center/activity-log/activity-log.component';
import { CommonAddFriendsComponent } from './about/about-center/common-add-friends/common-add-friends.component';
import { HobbiesInterestsComponent } from './about/about-center/hobbies-interests/hobbies-interests.component';


@NgModule({
  declarations: [
    AboutComponent,
    SocialAppComponent,
    AboutCenterComponent,
    FriendsComponent,
    PhotosComponent,
    TimelineComponent,
    TimelineCenterComponent,
    CommentOneComponent,
    CommentTwoComponent,
    TimelineLeftComponent,
    ActivityFeedComponent,
    MutualFriendsComponent,
    MyProfileComponent,
    TimelineRightComponent,
    FollowersComponent,
    FollwingsComponent,
    FriendsProfileComponent,
    LatestPhotosComponent,
    ProfileIntroComponent,
    SoicalProfileComponent,
    ActivityLogComponent,
    CommonAddFriendsComponent,
    HobbiesInterestsComponent
  ],
  imports: [
    CommonModule,
    SocialAppRoutingModule,
    SharedModule,
    UserModule,
    LightboxModule,
    GalleryModule
  ],
})
export class SocialAppModule { }
