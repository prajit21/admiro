import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/blog/blog-data';
import { BlogComment } from './blog-comment/blog-comment';

@Component({
    selector: 'app-blog-single',
    imports: [CommonModule, BlogComment],
    templateUrl: './blog-single.html',
    styleUrl: './blog-single.scss'
})
export class BlogSingle {

  public commentsData = commentsData;

}
