import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
    selector: 'app-common-add-friends',
    imports: [CommonModule],
    templateUrl: './common-add-friends.component.html',
    styleUrl: './common-add-friends.component.scss'
})
export class CommonAddFriendsComponent {

  @Input() data: data.addFriends;

}
