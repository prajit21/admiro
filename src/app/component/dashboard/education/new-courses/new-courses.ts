import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewCourse } from '../../../../shared/data/dashboard/education/education';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-new-courses',
  imports: [RouterModule, ClickOutsideDirective],
  templateUrl: './new-courses.html',
  styleUrl: './new-courses.scss',
})
export class NewCourses {
  public NewCouresData = NewCourse;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
