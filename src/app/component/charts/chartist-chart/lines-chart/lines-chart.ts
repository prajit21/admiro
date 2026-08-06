import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-lines-chart',
  imports: [ChartistModule],
  templateUrl: './lines-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './lines-chart.scss',
})
export class LinesChart {
  public LineChart = chartData.chart1;
}
