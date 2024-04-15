import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogAddPostComponent } from './blog-add-post/blog-add-post.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogCommentComponent } from './blog-single/blog-comment/blog-comment.component';

@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogAddPostComponent,
    BlogSingleComponent,
    BlogCommentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgSelectModule,
    DropzoneModule,
    AngularEditorModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    BlogCommentComponent
  ]
})
export class BlogModule { }
