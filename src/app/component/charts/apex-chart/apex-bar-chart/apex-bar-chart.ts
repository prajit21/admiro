import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-apex-bar-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './apex-bar-chart.html',
  styleUrl: './apex-bar-chart.scss',
})
export class ApexBarChart {
  public barChart = chartData.barChart;
}
