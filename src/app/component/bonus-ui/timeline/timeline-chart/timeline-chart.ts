import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-timeline-chart',
  imports: [CarouselModule],
  templateUrl: './timeline-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './timeline-chart.scss',
})
export class TimelineChart {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
