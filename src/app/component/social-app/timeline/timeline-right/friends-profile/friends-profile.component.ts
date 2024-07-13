import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-friends-profile',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './friends-profile.component.html',
  styleUrl: './friends-profile.component.scss'
})
export class FriendsProfileComponent {

  public friednsData = data.Friends;

}
