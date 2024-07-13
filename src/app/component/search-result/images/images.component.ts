import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as Data from '../../../shared/data/social-media/social-media-data';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule,GalleryModule,LightboxModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {

  public photosData = Data.photosData;

}
