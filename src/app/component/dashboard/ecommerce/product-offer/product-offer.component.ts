import { Component } from '@angular/core';
import { productoffer, sildesOptions } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrl: './product-offer.component.scss'
})
export class ProductOfferComponent {

  public SildesoptionsData = sildesOptions;
  public productoffer = productoffer;

}
