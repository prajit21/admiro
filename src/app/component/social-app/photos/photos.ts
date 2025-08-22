import { Component } from '@angular/core';
import * as Data from '../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-photos',
    imports: [CommonModule, GalleryModule, LightboxModule],
    templateUrl: './photos.html',
    styleUrl: './photos.scss'
})
export class Photos {

  public photosData = Data.photosData;

}
