import { Component } from '@angular/core';
import { SchoolPerformance } from '../../../../shared/data/dashboard/education/education-chart';

@Component({
  selector: 'app-school-performance',
  templateUrl: './school-performance.component.html',
  styleUrl: './school-performance.component.scss'
})
export class SchoolPerformanceComponent {

  public schoolPerformance = SchoolPerformance;

  public openTab: string = "Weekly";

  tab(value: string) {
    this.openTab = value
  }


}
