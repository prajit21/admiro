import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { productoffer2, sildesOptions2 } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-offer2',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-offer2.component.html',
  styleUrl: './product-offer2.component.scss'
})
export class ProductOffer2Component {

  public SildesoptionsData = sildesOptions2;
  public productoffer = productoffer2;

}
