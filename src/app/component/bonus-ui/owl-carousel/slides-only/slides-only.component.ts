import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sildesOnly, sildesOptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slides-only',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './slides-only.component.html',
  styleUrl: './slides-only.component.scss'
})
export class SlidesOnlyComponent {

  public sildesData = sildesOnly;
  public slidesopdtionData = sildesOptions;

}
