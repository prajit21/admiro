import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-disabled',
    imports: [CommonModule, NgxSliderModule],
    templateUrl: './disabled.html',
    styleUrl: './disabled.scss'
})
export class Disabled {

  public value3: number = 550;

  public options4: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };

}
