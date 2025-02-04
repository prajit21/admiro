import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddProduct } from '../../../shared/data/ecommerce/add-product';
import { AddProductsDetailsComponent } from './add-products-details/add-products-details.component';
import { AdvanceComponent } from './advance/advance.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';
import { ProductsFormStepeComponent } from './products-form-stepe/products-form-stepe.component';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';
import { SellingPriceComponent } from './selling-price/selling-price.component';

@Component({
    selector: 'app-add-product',
    imports: [CommonModule, AddProductsDetailsComponent, AdvanceComponent, ProductsCategoriesComponent, ProductsFormStepeComponent,
        ProductsGalleryComponent, SellingPriceComponent],
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  public stepsData = AddProduct;
  public activeSteps: number;

  ngOnInit() {
    const data = AddProduct.filter((data) => {
      return data.stepNumber === 1;
    });

    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

}

