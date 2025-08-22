import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/social-media/social-media-data';
import { ActivityLog } from './activity-log/activity-log';
import { HobbiesInterests } from './hobbies-interests/hobbies-interests';
import { CommonAddFriends } from './common-add-friends/common-add-friends';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-about-center',
    imports: [CommonModule, ActivityLog, HobbiesInterests,
        CommonAddFriends, Feathericon, NgbModule],
    templateUrl: './about-center.html',
    styleUrl: './about-center.scss'
})
export class AboutCenter {

  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;

}
