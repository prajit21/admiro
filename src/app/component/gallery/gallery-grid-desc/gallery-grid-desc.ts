import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { gallerydes } from '../../../shared/data/gallery/gallery-grid';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { GalleryModule } from 'ng-gallery';

@Component({
    selector: 'app-gallery-grid-desc',
    imports: [CommonModule, LightboxModule, GalleryModule],
    templateUrl: './gallery-grid-desc.html',
    styleUrl: './gallery-grid-desc.scss'
})
export class GalleryGridDesc {

  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  public galleryGrid = gallerydes;
  public items: GalleryItem[];

  ngOnInit() {

    this.items = this.galleryGrid.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items)
  }


}
