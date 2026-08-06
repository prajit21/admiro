import { DecimalPipe, AsyncPipe } from '@angular/common';
import { Component, inject, viewChildren, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { Category, CategoryData } from '../../../../shared/data/ecommerce/categoies-page';
import {
  CategoriesDirective,
  SortEvent,
} from '../../../../shared/directives/categories-page.directive';
import { CategoriesService } from '../../../../shared/services/ecommerce/categories-page.service';

@Component({
  selector: 'app-category-data-table',
  imports: [
    CategoriesDirective,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AsyncPipe,
  ],
  providers: [CategoriesService, DecimalPipe],
  templateUrl: './category-data-table.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './category-data-table.scss',
})
export class CategoryDataTable {
  public service = inject(CategoriesService);

  public Category$: Observable<Category[]>;
  public total$: Observable<number>;
  public CategoryList = CategoryData;

  readonly headers = viewChildren(CategoriesDirective);

  constructor() {
    const service = this.service;
    this.Category$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortableCategory() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
