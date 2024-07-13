import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-follwings',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './follwings.component.html',
  styleUrl: './follwings.component.scss'
})
export class FollwingsComponent {

  public followingData = data.Following;

}
