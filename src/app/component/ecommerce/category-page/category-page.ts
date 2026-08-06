import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CategoryDataTable } from './category-data-table/category-data-table';
import { TopSection } from '../product-list/top-section/top-section';

@Component({
  selector: 'app-category-page',
  imports: [TopSection, CategoryDataTable],
  templateUrl: './category-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './category-page.scss',
})
export class CategoryPage {}
