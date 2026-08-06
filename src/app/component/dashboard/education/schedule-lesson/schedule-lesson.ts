import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-schedule-lesson',
  imports: [NgbModule, ClickOutsideDirective],
  templateUrl: './schedule-lesson.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './schedule-lesson.scss',
})
export class ScheduleLesson {
  public date!: { year: number; month: number };
  public isopen: boolean = false;

  private calendar = inject(NgbCalendar);

  open() {
    this.isopen = !this.isopen;
  }

  clickOutside(): void {
    this.isopen = false;
  }
}
