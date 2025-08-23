import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  productoffer,
  sildesOptions,
} from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-product-offer',
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-offer.html',
  styleUrl: './product-offer.scss',
})
export class ProductOffer {
  public SildesoptionsData = sildesOptions;
  public productoffer = productoffer;
}
