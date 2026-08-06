import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inventory',
  imports: [],
  templateUrl: './inventory.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './inventory.scss',
})
export class Inventory {
  readonly activeSteps = output<number>();

  public activeStep: number = 6;
}
