import { Component } from '@angular/core';
import { educationchart1, educationchart2, educationchart3 } from '../../../shared/data/dashboard/education/education-chart';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LearningChartComponent } from './learning-chart/learning-chart.component';
import { NewCoursesComponent } from './new-courses/new-courses.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { ScheduleLessonComponent } from './schedule-lesson/schedule-lesson.component';
import { SchoolPerformanceComponent } from './school-performance/school-performance.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TopCommonEducationchartComponent } from './top-common-educationchart/top-common-educationchart.component';
import { UpcomingClassesComponent } from './upcoming-classes/upcoming-classes.component';

@Component({
    selector: 'app-education',
    imports: [CommonModule, AssignmentsComponent, LearningChartComponent, NewCoursesComponent,
        NoticeBoardComponent, ScheduleLessonComponent, SchoolPerformanceComponent, StudentDetailsComponent,
        ToDoListComponent, TopCommonEducationchartComponent, UpcomingClassesComponent],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationchart1 = educationchart1;
  public educationchart2 = educationchart2;
  public educationchart3 = educationchart3;

}
