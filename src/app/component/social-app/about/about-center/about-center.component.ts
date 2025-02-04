import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/social-media/social-media-data';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { HobbiesInterestsComponent } from './hobbies-interests/hobbies-interests.component';
import { CommonAddFriendsComponent } from './common-add-friends/common-add-friends.component';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-about-center',
    imports: [CommonModule, ActivityLogComponent, HobbiesInterestsComponent,
        CommonAddFriendsComponent, FeathericonComponent, NgbModule],
    templateUrl: './about-center.component.html',
    styleUrl: './about-center.component.scss'
})
export class AboutCenterComponent {

  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;

}
