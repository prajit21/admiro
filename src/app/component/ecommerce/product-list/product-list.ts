import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ProductlistDatatable } from './productlist-datatable/productlist-datatable';
import { TopSection } from './top-section/top-section';

@Component({
  selector: 'app-product-list',
  imports: [TopSection, ProductlistDatatable],
  templateUrl: './product-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './product-list.scss',
})
export class ProductList {}
