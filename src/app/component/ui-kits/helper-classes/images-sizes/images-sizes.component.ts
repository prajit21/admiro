import { Component } from '@angular/core';
import { ImageSize } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images-sizes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-sizes.component.html',
  styleUrl: './images-sizes.component.scss'
})
export class ImagesSizesComponent {

  public ImagSizeData = ImageSize;

}
