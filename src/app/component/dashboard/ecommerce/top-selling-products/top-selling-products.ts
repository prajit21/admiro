import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopSellingProduct } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-top-selling-products',
  imports: [RouterModule, ClickOutsideDirective],
  templateUrl: './top-selling-products.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './top-selling-products.scss',
})
export class TopSellingProducts {
  public TopsellingProduct = TopSellingProduct;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
