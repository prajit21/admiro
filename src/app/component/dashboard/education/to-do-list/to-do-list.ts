
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Todolist } from '../../../../shared/data/dashboard/education/education';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-to-do-list',
  imports: [RouterModule, ClickOutsideDirective, FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
})
export class ToDoList {
  public TodoList = Todolist;
  public isopen: boolean = false;

  open() {
    this.isopen = !this.isopen;
  }

  clickOutside(): void {
    this.isopen = false;
  }
}
