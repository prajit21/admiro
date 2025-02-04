import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskSidebarComponent } from './task-sidebar/task-sidebar.component';

@Component({
    selector: 'app-task',
    imports: [CommonModule, TaskSidebarComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss'
})
export class TaskComponent {

}
