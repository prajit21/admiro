import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { responsiveowl, responsiveOptions } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-responsive-example',
  imports: [CarouselModule],
  templateUrl: './responsive-example.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './responsive-example.scss',
})
export class ResponsiveExample {
  public responsiveData = responsiveowl;
  public responsiveOptions = responsiveOptions;
}
