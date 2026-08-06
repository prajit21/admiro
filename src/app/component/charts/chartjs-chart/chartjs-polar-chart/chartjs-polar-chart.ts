import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-polar-chart',
  imports: [BaseChartDirective],
  templateUrl: './chartjs-polar-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chartjs-polar-chart.scss',
})
export class ChartjsPolarChart {
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;
}
