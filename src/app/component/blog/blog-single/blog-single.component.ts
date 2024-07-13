import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/blog/blog-data';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [CommonModule,BlogCommentComponent],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.scss'
})
export class BlogSingleComponent {

  public commentsData = commentsData;

}
