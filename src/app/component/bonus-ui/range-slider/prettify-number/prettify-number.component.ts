import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prettify-number',
  standalone: true,
  imports: [CommonModule,NgxSliderModule],
  templateUrl: './prettify-number.component.html',
  styleUrl: './prettify-number.component.scss'
})
export class PrettifyNumberComponent {

  public value3: number = 2000;

  public options3: Options = {
    floor: 1000,
    ceil: 10000,
    showTicksValues: true,
    tickStep: 3000,
    tickValueStep: 100
  };

}
