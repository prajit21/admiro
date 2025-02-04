import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-timeline-chart',
    imports: [CommonModule, CarouselModule],
    templateUrl: './timeline-chart.component.html',
    styleUrl: './timeline-chart.component.scss'
})
export class TimelineChartComponent {

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
        items: 1
      }
    },
  }

}
