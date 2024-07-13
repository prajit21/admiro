import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-schedule-lesson',
  standalone: true,
  imports: [CommonModule,NgbModule,ClickOutsideDirective],
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
