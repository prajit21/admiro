import { Component, output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  imports: [],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss',
})
export class Inventory {
  readonly activeSteps = output<number>();

  public activeStep: number = 6;
}
