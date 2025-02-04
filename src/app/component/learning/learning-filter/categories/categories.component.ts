import { Component } from '@angular/core';
import { Categories } from '../../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-categories',
    imports: [CommonModule, NgbModule],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  public Categories = Categories;
  public isCollapsed = false;

}
