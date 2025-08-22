import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-friends-profile',
    imports: [CommonModule, NgbModule],
    templateUrl: './friends-profile.html',
    styleUrl: './friends-profile.scss'
})
export class FriendsProfile {

  public friednsData = data.Friends;

}
