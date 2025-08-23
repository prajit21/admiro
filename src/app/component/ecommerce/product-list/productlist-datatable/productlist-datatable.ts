import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import {
  productListData,
  productListInterface,
} from '../../../../shared/data/ecommerce/product-list';
import {
  ProductListDirective,
  SortEvent,
} from '../../../../shared/directives/product-list.directive';
import { ProductListService } from '../../../../shared/services/ecommerce/product-list.service';

@Component({
  selector: 'app-productlist-datatable',
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ProductListDirective,
    RouterModule,
  ],
  templateUrl: './productlist-datatable.html',
  styleUrl: './productlist-datatable.scss',
  providers: [ProductListService, DecimalPipe],
})
export class ProductlistDatatable {
  public service = inject(ProductListService);
  public config = inject(NgbRatingConfig);

  public products$: Observable<productListInterface[]>;
  public total$: Observable<number>;
  public PRODUCTLIST = productListData;

  readonly headers = viewChildren(ProductListDirective);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
    this.products$ = this.service.support$;
    this.total$ = this.service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
