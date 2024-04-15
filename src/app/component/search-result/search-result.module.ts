import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { SharedModule } from '../../shared/shared.module';
import { SearchResultRoutingModule } from './search-result-routing.module';

import { AllComponent } from './all/all.component';
import { SearchResultComponent } from './search-result.component';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    AllComponent,
    SearchResultComponent,
    VideosComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SharedModule,
    LightboxModule,
    GalleryModule
  ]
})
export class SearchResultModule { }
