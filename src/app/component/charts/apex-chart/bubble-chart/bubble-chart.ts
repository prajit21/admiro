import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-bubble-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './bubble-chart.html',
  styleUrl: './bubble-chart.scss',
})
export class BubbleChart {
  public bubbleChart = chartData.bubbleChart;
}
