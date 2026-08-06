import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-radial-chart',
  imports: [NgApexchartsModule],
  templateUrl: './radial-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './radial-chart.scss',
})
export class RadialChart {
  public radialBarChart = chartData.radialBarChart;
}
