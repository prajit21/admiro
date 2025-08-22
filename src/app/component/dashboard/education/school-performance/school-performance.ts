import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SchoolPerformanceChart } from '../../../../shared/data/dashboard/education/education-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-school-performance',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './school-performance.html',
    styleUrl: './school-performance.scss'
})
export class SchoolPerformance {

  public schoolPerformance = SchoolPerformanceChart;

  public openTab: string = "Weekly";

  tab(value: string) {
    this.openTab = value
  }


}
