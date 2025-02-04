import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { commonImg, autoWidthoption } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-auto-widht-example',
    imports: [CommonModule, CarouselModule],
    templateUrl: './auto-widht-example.component.html',
    styleUrl: './auto-widht-example.component.scss'
})
export class AutoWidhtExampleComponent {

  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;

}
