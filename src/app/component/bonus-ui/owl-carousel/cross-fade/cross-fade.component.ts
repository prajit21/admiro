import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeOptions, crossFade } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cross-fade',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './cross-fade.component.html',
  styleUrl: './cross-fade.component.scss'
})
export class CrossFadeComponent {

  public crossfadeData = crossFade;
  public fadeoptionsData = fadeOptions;

}
