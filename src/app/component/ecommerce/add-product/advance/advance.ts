import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

import { AdditionalOptions } from './additional-options/additional-options';
import { Inventory } from './inventory/inventory';
import { Shipping } from './shipping/shipping';

@Component({
  selector: 'app-advance',
  imports: [CommonModule, AdditionalOptions, Inventory, Shipping],
  templateUrl: './advance.html',
  styleUrl: './advance.scss',
})
export class Advance {
  readonly activeSteps = output<number>();

  public activeStep: number = 5;
  public validate: boolean;

  public openTab: string = 'Inventory';

  public tabbed(val: string) {
    this.openTab = val;
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
