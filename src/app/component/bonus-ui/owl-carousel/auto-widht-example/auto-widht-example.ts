import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { commonImg, autoWidthoption } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-widht-example',
  imports: [CarouselModule],
  templateUrl: './auto-widht-example.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './auto-widht-example.scss',
})
export class AutoWidhtExample {
  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;
}
