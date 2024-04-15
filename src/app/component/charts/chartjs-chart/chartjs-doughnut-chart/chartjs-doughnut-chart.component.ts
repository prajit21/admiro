import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-doughnut-chart',
  templateUrl: './chartjs-doughnut-chart.component.html',
  styleUrl: './chartjs-doughnut-chart.component.scss'
})
export class ChartjsDoughnutChartComponent {

  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartColors = chartData.doughnutChartColors;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;

}
