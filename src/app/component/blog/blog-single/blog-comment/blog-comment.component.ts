import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { comments } from '../../../../shared/data/blog/blog-data';

@Component({
    selector: 'app-blog-comment',
    imports: [CommonModule],
    templateUrl: './blog-comment.component.html',
    styleUrl: './blog-comment.component.scss'
})
export class BlogCommentComponent {
  
  @Input() data : comments[];

}
