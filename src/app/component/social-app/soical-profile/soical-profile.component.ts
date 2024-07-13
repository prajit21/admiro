import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { PhotosComponent } from '../photos/photos.component';
import { FriendsComponent } from '../friends/friends.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-soical-profile',
  standalone: true,
  imports: [CommonModule, AboutComponent, PhotosComponent, FriendsComponent, SoicalProfileComponent,
    TimelineComponent],
  templateUrl: './soical-profile.component.html',
  styleUrl: './soical-profile.component.scss'
})
export class SoicalProfileComponent {

  public active = 1;
  public openTab: string = "timeline";

  tab(value: string) {
    this.openTab = value
  }

}
