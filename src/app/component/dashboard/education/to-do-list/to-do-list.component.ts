import { Component } from '@angular/core';
import { Todolist } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  
  public TodoList = Todolist;

}
