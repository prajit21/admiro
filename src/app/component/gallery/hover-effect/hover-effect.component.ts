import { Component } from '@angular/core';
import * as Data from '../../../shared/data/gallery/hover';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-hover-effect',
  standalone: true,
  imports: [CommonModule,LightboxModule],
  templateUrl: './hover-effect.component.html',
  styleUrl: './hover-effect.component.scss'
})
export class HoverEffectComponent {

  public imgData = Data.imgData;
  public hoverData = Data.hoverData;

}
