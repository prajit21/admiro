import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.scss'
})
export class FollowersComponent {

  public followersData = data.Followers;

}
