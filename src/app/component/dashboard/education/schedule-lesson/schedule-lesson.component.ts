import { Component } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-lesson',
  templateUrl: './schedule-lesson.component.html',
  styleUrl: './schedule-lesson.component.scss'
})
export class ScheduleLessonComponent {

  public date!: { year: number; month: number; };
  public isopen:boolean = false;

  constructor(private calendar: NgbCalendar) { }
  
  open(){
   this.isopen = !this.isopen
  }

  clickOutside(): void {
    this.isopen = false
  }


}
