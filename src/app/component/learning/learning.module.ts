import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { BlogModule } from '../blog/blog.module';
import { LearningRoutingModule } from './learning-routing.module';

import { LearningListComponent } from './learning-list/learning-list.component';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { FindCourceComponent } from './learning-filter/find-cource/find-cource.component';
import { UpcomingCourceComponent } from './learning-filter/upcoming-cource/upcoming-cource.component';

@NgModule({
  declarations: [
    LearningListComponent,
    DetailedCourseComponent,
    LearningFilterComponent,
    CategoriesComponent,
    FindCourceComponent,
    UpcomingCourceComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    SharedModule,
    BlogModule,
  ]
})
export class LearningModule { }
