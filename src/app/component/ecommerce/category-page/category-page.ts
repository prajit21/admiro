import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CategoryDataTable } from './category-data-table/category-data-table';
import { TopSection } from '../product-list/top-section/top-section';

@Component({
  selector: 'app-category-page',
  imports: [CommonModule, TopSection, CategoryDataTable],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss',
})
export class CategoryPage {}
