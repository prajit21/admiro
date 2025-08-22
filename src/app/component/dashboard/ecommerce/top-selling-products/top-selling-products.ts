import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopSellingProduct } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-top-selling-products',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './top-selling-products.html',
    styleUrl: './top-selling-products.scss'
})
export class TopSellingProducts {

  public TopsellingProduct = TopSellingProduct;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }


}
