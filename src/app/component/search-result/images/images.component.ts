import { Component } from '@angular/core';
import * as Data from '../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {

  public photosData = Data.photosData;

}
