import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryData } from '../../../../shared/data/ecommerce/categoies-page';
import { CategoriesDirective, SortEvent } from '../../../../shared/directives/categories-page.directive';
import { CategoriesService } from '../../../../shared/services/ecommerce/categories-page.service';

@Component({
  selector: 'app-category-data-table',
  templateUrl: './category-data-table.component.html',
  styleUrl: './category-data-table.component.scss'
})
export class CategoryDataTableComponent {

  public Category$: Observable<Category[]>;
  public total$: Observable<number>;
  public CategoryList = CategoryData;

  @ViewChildren(CategoriesDirective)

  headers: QueryList<CategoriesDirective>;

  constructor(public service: CategoriesService) {
    this.Category$ = service.support$;
    this.total$ = service.total$;
  }


  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortableCategory !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
