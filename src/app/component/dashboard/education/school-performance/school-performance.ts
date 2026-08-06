import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SchoolPerformanceChart } from '../../../../shared/data/dashboard/education/education-chart';

@Component({
  selector: 'app-school-performance',
  imports: [NgApexchartsModule],
  templateUrl: './school-performance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './school-performance.scss',
})
export class SchoolPerformance {
  public schoolPerformance = SchoolPerformanceChart;

  public openTab: string = 'Weekly';

  tab(value: string) {
    this.openTab = value;
  }
}
