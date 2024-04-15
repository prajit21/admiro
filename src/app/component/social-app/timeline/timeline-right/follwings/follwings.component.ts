import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-follwings',
  templateUrl: './follwings.component.html',
  styleUrl: './follwings.component.scss'
})
export class FollwingsComponent {

  public followingData = data.Following;

}
