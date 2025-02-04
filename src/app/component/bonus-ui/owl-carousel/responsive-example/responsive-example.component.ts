import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { responsiveowl, responsiveOptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-responsive-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './responsive-example.component.html',
    styleUrl: './responsive-example.component.scss'
})
export class ResponsiveExampleComponent {

  public responsiveData = responsiveowl;
  public responsiveOptions = responsiveOptions;

}
