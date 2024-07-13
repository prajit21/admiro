import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopSectionComponent } from '../product-list/top-section/top-section.component';
import { CategoryDataTableComponent } from './category-data-table/category-data-table.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule,TopSectionComponent,CategoryDataTableComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent {

}
