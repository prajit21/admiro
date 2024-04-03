import { Component } from '@angular/core';
import { BestSeller } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {

  public Bestseller = BestSeller;

}
