import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { productListData, productListInterface } from '../../../../shared/data/ecommerce/product-list';
import { ProductListDirective, SortEvent } from '../../../../shared/directives/product-list.directive';
import { ProductListService } from '../../../../shared/services/ecommerce/product-list.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productlist-datatable',
  templateUrl: './productlist-datatable.component.html',
  styleUrl: './productlist-datatable.component.scss',
  providers: [ProductListService]
})
export class ProductlistDatatableComponent {

  public products$: Observable<productListInterface[]>;
  public total$: Observable<number>;
  public PRODUCTLIST = productListData

  @ViewChildren(ProductListDirective)

  headers: QueryList<ProductListDirective>;

  constructor(public service: ProductListService, public config: NgbRatingConfig) {
    config.max = 5; 
    config.readonly = true;
    this.products$ = service.support$;
    this.total$ = service.total$;
  }


  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


}
