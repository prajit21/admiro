import { Component } from '@angular/core';
import { NewCourses } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-new-courses',
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
