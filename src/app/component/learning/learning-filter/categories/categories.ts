import { Component } from '@angular/core';
import { Category } from '../../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-categories',
    imports: [CommonModule, NgbModule],
    templateUrl: './categories.html',
    styleUrl: './categories.scss'
})
export class Categories {

  public Categories = Category;
  public isCollapsed = false;

}
