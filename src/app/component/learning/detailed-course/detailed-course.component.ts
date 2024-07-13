import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { BlogCommentComponent } from '../../blog/blog-single/blog-comment/blog-comment.component';
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';

@Component({
  selector: 'app-detailed-course',
  standalone: true,
  imports: [CommonModule,BlogCommentComponent,LearningFilterComponent],
  templateUrl: './detailed-course.component.html',
  styleUrl: './detailed-course.component.scss'
})
export class DetailedCourseComponent {

  public commentsData = commentsData;

}
