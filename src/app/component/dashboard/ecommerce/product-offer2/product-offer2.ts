import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  productoffer2,
  sildesOptions2,
} from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-product-offer2',
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-offer2.html',
  styleUrl: './product-offer2.scss',
})
export class ProductOffer2 {
  public SildesoptionsData = sildesOptions2;
  public productoffer = productoffer2;
}
