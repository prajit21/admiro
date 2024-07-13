import { Routes } from '@angular/router';
import { LearningListComponent } from './learning-list/learning-list.component';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';


export const Learning: Routes = [
  {
    path: '',
    children: [
      {
        path: 'learning-list',
        component: LearningListComponent,
        data: {
          title: 'Learning List',
          breadcrumb: 'Learning List',
        }
      },
      {
        path: 'detailed-course',
        component: DetailedCourseComponent,
        data: {
          title: 'Detailed Course',
          breadcrumb: 'Detailed Course',
        }
      },
    ]
  }
]