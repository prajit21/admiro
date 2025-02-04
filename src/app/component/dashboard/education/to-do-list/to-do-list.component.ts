import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todolist } from '../../../../shared/data/dashboard/education/education';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-to-do-list',
    imports: [CommonModule, RouterModule, ClickOutsideDirective, FormsModule],
    templateUrl: './to-do-list.component.html',
    styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  
  public TodoList = Todolist;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }


}
