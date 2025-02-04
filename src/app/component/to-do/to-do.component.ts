import { Component } from '@angular/core';
import * as data from '../../shared/data/todo/todo';
import { CommonModule } from '@angular/common';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

@Component({
    selector: 'app-to-do',
    imports: [CommonModule, TodoFilterComponent, FormsModule, ReactiveFormsModule, NgbModule],
    templateUrl: './to-do.component.html',
    styleUrl: './to-do.component.scss'
})
export class ToDoComponent {

  public taskData = data.task;
  public addAlert: boolean = false;
  public completedText: string;
  public deletedTask: string;
  public taskCompletedAlert: boolean = false;
  public taskInCompletedAlert: boolean = false;
  public taskDeleteAlert: boolean = false;
  public date = new Date();
  public myDate = `${this.date.getDate()} ${Months[this.date.getMonth()]}`
  public text: string = '';
  public completed: boolean = false;
  public red_border: boolean = false;
  public visible: boolean = false;

  constructor() { }

  ngOnInit() { }


  public addTask(text: data.Task) {
    if(this.text && this.myDate){
    let someData = {
      'text': this.text,
      "Date": this.myDate,
      'priority': 'Pending',
      'badgeClass': 'badge-light-danger',
      "completed": false,
    }
    this.taskData.unshift(someData);
  }
    this.addAlert = true;
    setTimeout(() => {
      this.addAlert = false;
    }, 3000)

  }

  public taskCompleted(task: data.Task) {
    task.completed = !task.completed
    if (task.completed == true) {
      this.completedText = task.text;
      this.taskCompletedAlert = true;
      setTimeout(() => {
        this.taskCompletedAlert = false;
      }, 3000)
    } else {
      this.completedText = task.text;
      this.taskInCompletedAlert = true;
      setTimeout(() => {
        this.taskInCompletedAlert = false;
      }, 3000)
    }
  }

  public taskDeleted(task: data.Task, i: number) {
    const data = this.taskData.filter((a) => {
      return a === task
    })
    this.deletedTask = data[0].text;
    this.taskData.splice(i, 1);
    this.taskDeleteAlert = true;
    setTimeout(() => {
      this.taskDeleteAlert = false;
    }, 3000)
  }

  public markAllAction(action:any) {
    this.taskData.filter(task => {
    task.completed = action
    })
    this.completed = action
  }

}
