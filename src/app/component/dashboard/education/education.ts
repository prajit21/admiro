import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Assignments } from './assignments/assignments';
import { LearningChart } from './learning-chart/learning-chart';
import { NewCourses } from './new-courses/new-courses';
import { NoticeBoard } from './notice-board/notice-board';
import { ScheduleLesson } from './schedule-lesson/schedule-lesson';
import { SchoolPerformance } from './school-performance/school-performance';
import { StudentDetails } from './student-details/student-details';
import { ToDoList } from './to-do-list/to-do-list';
import { TopCommonEducationchart } from './top-common-educationchart/top-common-educationchart';
import { UpcomingClasses } from './upcoming-classes/upcoming-classes';
import {
  educationchart1,
  educationchart2,
  educationchart3,
} from '../../../shared/data/dashboard/education/education-chart';

@Component({
  selector: 'app-education',
  imports: [
    CommonModule,
    Assignments,
    LearningChart,
    NewCourses,
    NoticeBoard,
    ScheduleLesson,
    SchoolPerformance,
    StudentDetails,
    ToDoList,
    TopCommonEducationchart,
    UpcomingClasses,
  ],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  public educationchart1 = educationchart1;
  public educationchart2 = educationchart2;
  public educationchart3 = educationchart3;
}
