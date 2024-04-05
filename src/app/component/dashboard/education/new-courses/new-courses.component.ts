import { Component } from '@angular/core';
import { NewCourses } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-new-courses',
  standalone: true,
  imports: [],
  templateUrl: './new-courses.component.html',
  styleUrl: './new-courses.component.scss'
})
export class NewCoursesComponent {

  public NewCouresData = NewCourses;

}
