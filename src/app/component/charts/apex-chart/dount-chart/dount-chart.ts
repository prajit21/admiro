import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-dount-chart',
  imports: [NgApexchartsModule],
  templateUrl: './dount-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dount-chart.scss',
})
export class DountChart {
  public donutChart = chartData.donutChart;
}
