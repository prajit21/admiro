import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { GalleryRoutingModule } from './gallery-routing.module';

import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryGridDescComponent } from './gallery-grid-desc/gallery-grid-desc.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { MasonryWithDescComponent } from './masonry-with-desc/masonry-with-desc.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';


@NgModule({
  declarations: [
    GalleryGridComponent,
    GalleryGridDescComponent,
    MasonryGalleryComponent,
    MasonryWithDescComponent,
    HoverEffectComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule
  ]
})
export class GalleryModule { }
