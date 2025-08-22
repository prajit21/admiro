import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
    selector: 'app-mutual-friends',
    imports: [CommonModule, NgbModule],
    templateUrl: './mutual-friends.html',
    styleUrl: './mutual-friends.scss'
})
export class MutualFriends {

  public isCollapsed = false;
  public mautalFriendsData = data.mutualFriendsData;

}
