import { Component } from '@angular/core';
import { findCourse } from '../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { CategoriesComponent } from './categories/categories.component';
import { FindCourceComponent } from './find-cource/find-cource.component';
import { UpcomingCourceComponent } from './upcoming-cource/upcoming-cource.component';

@Component({
  selector: 'app-learning-filter',
  standalone: true,
  imports: [CommonModule,ClickOutsideDirective,CategoriesComponent,FindCourceComponent,UpcomingCourceComponent],
  templateUrl: './learning-filter.component.html',
  styleUrl: './learning-filter.component.scss'
})
export class LearningFilterComponent {

  public findCourse = findCourse;
  public isCollapsed : boolean = false;

  openFilter(){
    this.isCollapsed =! this.isCollapsed;
  }

  clickOutside():void { 
    this.isCollapsed= false;
  }

}
