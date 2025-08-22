import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BestSellers } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-best-seller',
    imports: [CommonModule, RouterModule],
    templateUrl: './best-seller.html',
    styleUrl: './best-seller.scss'
})
export class BestSeller {

  public Bestseller = BestSellers;

}
