import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-latest-photos',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './latest-photos.component.html',
  styleUrl: './latest-photos.component.scss'
})
export class LatestPhotosComponent {

  public latestPhotosData = data.latestPhotos;

}
