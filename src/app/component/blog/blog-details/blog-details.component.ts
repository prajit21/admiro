import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/blog/blog-data';

@Component({
    selector: 'app-blog-details',
    imports: [CommonModule],
    templateUrl: './blog-details.component.html',
    styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {

  public blog = blogData;

}
