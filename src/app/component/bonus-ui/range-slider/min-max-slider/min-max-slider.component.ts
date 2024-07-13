import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSliderModule, Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-min-max-slider',
  standalone: true,
  imports: [CommonModule,NgxSliderModule],
  templateUrl: './min-max-slider.component.html',
  styleUrl: './min-max-slider.component.scss'
})
export class MinMaxSliderComponent {

  public value2: number = 550;
  public maxvalue: number = 100;

  public options: Options = {
    floor: 100,
    ceil: 1000
  };


}
