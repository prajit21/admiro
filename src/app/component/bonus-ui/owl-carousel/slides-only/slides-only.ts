import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sildesOnly, sildesOptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-slides-only',
    imports: [CommonModule, CarouselModule],
    templateUrl: './slides-only.html',
    styleUrl: './slides-only.scss'
})
export class SlidesOnly {

  public sildesData = sildesOnly;
  public slidesopdtionData = sildesOptions;

}
