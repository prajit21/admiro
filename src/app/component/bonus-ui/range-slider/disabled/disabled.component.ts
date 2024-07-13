import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSliderModule, Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-disabled',
  standalone: true,
  imports: [CommonModule,NgxSliderModule],
  templateUrl: './disabled.component.html',
  styleUrl: './disabled.component.scss'
})
export class DisabledComponent {

  public value3: number = 550;

  public options4: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };

}
