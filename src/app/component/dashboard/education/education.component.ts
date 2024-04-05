import { Component } from '@angular/core';
import { TopCommonEducationchartComponent } from './top-common-educationchart/top-common-educationchart.component';
import { educationchart1, educationchart2, educationchart3 } from '../../../shared/data/dashboard/education/education-chart';
import { UpcomingClassesComponent } from './upcoming-classes/upcoming-classes.component';
import { SchoolPerformanceComponent } from './school-performance/school-performance.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NewCoursesComponent } from './new-courses/new-courses.component';
import { LearningChartComponent } from './learning-chart/learning-chart.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ScheduleLessonComponent } from './schedule-lesson/schedule-lesson.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TopCommonEducationchartComponent, UpcomingClassesComponent, SchoolPerformanceComponent,
    NoticeBoardComponent, StudentDetailsComponent, NewCoursesComponent, LearningChartComponent,
    ToDoListComponent, AssignmentsComponent, ScheduleLessonComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationchart1 = educationchart1;
  public educationchart2 = educationchart2;
  public educationchart3 = educationchart3;


}
