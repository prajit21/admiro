import { Component } from '@angular/core';
import { TopSellingProducts } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-top-selling-products',
  standalone: true,
  imports: [],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent {

  public TopsellingProduct = TopSellingProducts;

}
