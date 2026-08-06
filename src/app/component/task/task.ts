import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TaskSidebar } from './task-sidebar/task-sidebar';

@Component({
  selector: 'app-task',
  imports: [TaskSidebar],
  templateUrl: './task.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './task.scss',
})
export class Task {}
