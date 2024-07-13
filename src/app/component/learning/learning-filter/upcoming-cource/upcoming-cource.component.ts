import { Component } from '@angular/core';
import { upcomingCourse } from '../../../../shared/data/learning/learning';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-cource',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './upcoming-cource.component.html',
  styleUrl: './upcoming-cource.component.scss'
})
export class UpcomingCourceComponent {

  public upcomingCourse = upcomingCourse;
  public isCollapsed = false;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
