import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { productoffer, sildesOptions } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-offer',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-offer.component.html',
  styleUrl: './product-offer.component.scss'
})
export class ProductOfferComponent {

  public SildesoptionsData = sildesOptions;
  public productoffer = productoffer;

}
