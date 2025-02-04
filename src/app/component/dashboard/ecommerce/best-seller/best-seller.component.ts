import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BestSeller } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-best-seller',
    imports: [CommonModule, RouterModule],
    templateUrl: './best-seller.component.html',
    styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {

  public Bestseller = BestSeller;

}
