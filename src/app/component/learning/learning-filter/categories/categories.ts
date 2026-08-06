import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Category } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-categories',
  imports: [NgbModule],
  templateUrl: './categories.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './categories.scss',
})
export class Categories {
  public Categories = Category;
  public isCollapsed = false;
}
