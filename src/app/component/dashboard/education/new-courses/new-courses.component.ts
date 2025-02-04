import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewCourses } from '../../../../shared/data/dashboard/education/education';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-new-courses',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './new-courses.component.html',
    styleUrl: './new-courses.component.scss'
})
export class NewCoursesComponent {

  public NewCouresData = NewCourses;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
