import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';

import { TaskComponent } from './task.component';
import { TaskSidebarComponent } from './task-sidebar/task-sidebar.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { AddtaskTagComponent } from './task-modal/addtask-tag/addtask-tag.component';
import { NewTaskComponent } from './task-modal/new-task/new-task.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskSidebarComponent,
    AllTaskComponent,
    AddtaskTagComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
