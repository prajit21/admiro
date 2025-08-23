import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { commentsData } from '../../../shared/data/learning/learning';
import { BlogComment } from '../../blog/blog-single/blog-comment/blog-comment';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-detailed-course',
  imports: [CommonModule, BlogComment, LearningFilter],
  templateUrl: './detailed-course.html',
  styleUrl: './detailed-course.scss',
})
export class DetailedCourse {
  public commentsData = commentsData;
}
