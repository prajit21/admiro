import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
    selector: 'app-mutual-friends',
    imports: [CommonModule, NgbModule],
    templateUrl: './mutual-friends.component.html',
    styleUrl: './mutual-friends.component.scss'
})
export class MutualFriendsComponent {

  public isCollapsed = false;
  public mautalFriendsData = data.mutualFriendsData;

}
