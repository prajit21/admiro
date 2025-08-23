import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-doughnut-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chartjs-doughnut-chart.html',
  styleUrl: './chartjs-doughnut-chart.scss',
})
export class ChartjsDoughnutChart {
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;
}
