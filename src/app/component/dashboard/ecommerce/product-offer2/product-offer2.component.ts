import { Component } from '@angular/core';
import { productoffer2, sildesOptions2 } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-product-offer2',
  templateUrl: './product-offer2.component.html',
  styleUrl: './product-offer2.component.scss'
})
export class ProductOffer2Component {

  public SildesoptionsData = sildesOptions2;
  public productoffer = productoffer2;

}
