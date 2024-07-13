import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSliderModule, Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-default-range-slider',
  standalone: true,
  imports: [CommonModule,NgxSliderModule],
  templateUrl: './default-range-slider.component.html',
  styleUrl: './default-range-slider.component.scss'
})
export class DefaultRangeSliderComponent {

  public value: number = 550;

  public options: Options = {
    floor: 100,
    ceil: 1000
  };


}
