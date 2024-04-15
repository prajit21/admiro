import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/learning/learning';

@Component({
  selector: 'app-detailed-course',
  templateUrl: './detailed-course.component.html',
  styleUrl: './detailed-course.component.scss'
})
export class DetailedCourseComponent {

  public commentsData = commentsData;

}
