import { Component } from '@angular/core';

import { Categories } from './categories/categories';
import { FindCource } from './find-cource/find-cource';
import { UpcomingCource } from './upcoming-cource/upcoming-cource';
import { findCourse } from '../../../shared/data/learning/learning';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';

@Component({
  selector: 'app-learning-filter',
  imports: [ClickOutsideDirective, Categories, FindCource, UpcomingCource],
  templateUrl: './learning-filter.html',
  styleUrl: './learning-filter.scss',
})
export class LearningFilter {
  public findCourse = findCourse;
  public isCollapsed: boolean = false;

  openFilter() {
    this.isCollapsed = !this.isCollapsed;
  }

  clickOutside(): void {
    this.isCollapsed = false;
  }
}
