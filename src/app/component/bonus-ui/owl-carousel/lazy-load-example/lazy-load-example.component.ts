import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { commonImg, Lazyload0ptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-lazy-load-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './lazy-load-example.component.html',
    styleUrl: './lazy-load-example.component.scss'
})
export class LazyLoadExampleComponent {

  public lazyloadData = commonImg;
  public lazyLoadOptions = Lazyload0ptions;

}
