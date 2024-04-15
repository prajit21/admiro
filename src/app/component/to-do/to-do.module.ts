import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoRoutingModule } from './to-do-routing.module';

import { ToDoComponent } from './to-do.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';

@NgModule({
  declarations: [
    ToDoComponent,
    TodoFilterComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ToDoModule { }
