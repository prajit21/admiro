import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AddProductsDetails } from './add-products-details/add-products-details';
import { Advance } from './advance/advance';
import { ProductsCategories } from './products-categories/products-categories';
import { ProductsFormStepe } from './products-form-stepe/products-form-stepe';
import { ProductsGallery } from './products-gallery/products-gallery';
import { SellingPrice } from './selling-price/selling-price';
import { AddProducts } from '../../../shared/data/ecommerce/add-product';

@Component({
  selector: 'app-add-product',
  imports: [
    AddProductsDetails,
    Advance,
    ProductsCategories,
    ProductsFormStepe,
    ProductsGallery,
    SellingPrice,
    NgClass,
  ],
  templateUrl: './add-product.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-product.scss',
})
export class AddProduct {
  public stepsData = AddProducts;
  public activeSteps: number;

  ngOnInit() {
    const data = AddProducts.filter(data => {
      return data.stepNumber === 1;
    });

    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
