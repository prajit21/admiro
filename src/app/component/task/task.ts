import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TaskSidebar } from './task-sidebar/task-sidebar';

@Component({
  selector: 'app-task',
  imports: [CommonModule, TaskSidebar],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {}
