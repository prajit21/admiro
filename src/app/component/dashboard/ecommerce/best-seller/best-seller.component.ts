import { Component } from '@angular/core';
import { BestSeller } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {

  public Bestseller = BestSeller;

}
