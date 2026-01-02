
import { Component, input } from '@angular/core';

import { staps } from '../../../../shared/data/ecommerce/add-product';

@Component({
  selector: 'app-products-form-stepe',
  imports: [],
  templateUrl: './products-form-stepe.html',
  styleUrl: './products-form-stepe.scss',
})
export class ProductsFormStepe {
  readonly stepsData = input<staps[]>();
  readonly activeSteps = input<number>();

  ngOnChanges() {
    this.stepsData()?.forEach(data => {
      if (data.stepNumber < this.activeSteps()!) {
        data.active = true;
      } else {
        data.active = false;
      }
    });
  }
}
