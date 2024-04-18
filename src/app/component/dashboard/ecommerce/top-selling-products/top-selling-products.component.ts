import { Component } from '@angular/core';
import { TopSellingProducts } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-top-selling-products',
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent {

  public TopsellingProduct = TopSellingProducts;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }


}
