import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import * as Data from '../../../shared/data/gallery/hover';

@Component({
  selector: 'app-hover-effect',
  imports: [LightboxModule],
  templateUrl: './hover-effect.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hover-effect.scss',
})
export class HoverEffect {
  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
}
