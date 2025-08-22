import { Component } from '@angular/core';
import { ImageSize } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-images-sizes',
    imports: [CommonModule],
    templateUrl: './images-sizes.html',
    styleUrl: './images-sizes.scss'
})
export class ImagesSizes {

  public ImagSizeData = ImageSize;

}
