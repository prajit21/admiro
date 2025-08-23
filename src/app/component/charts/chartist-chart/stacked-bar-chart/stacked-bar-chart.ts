import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-stacked-bar-chart',
  imports: [CommonModule, ChartistModule],
  templateUrl: './stacked-bar-chart.html',
  styleUrl: './stacked-bar-chart.scss',
})
export class StackedBarChart {
  public chart7 = chartData.chart7;
}
