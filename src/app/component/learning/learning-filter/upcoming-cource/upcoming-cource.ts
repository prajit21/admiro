import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { upcomingCourse } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-upcoming-cource',
  imports: [CommonModule, NgbModule],
  templateUrl: './upcoming-cource.html',
  styleUrl: './upcoming-cource.scss',
})
export class UpcomingCource {
  public config = inject(NgbRatingConfig);

  public upcomingCourse = upcomingCourse;
  public isCollapsed = false;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
