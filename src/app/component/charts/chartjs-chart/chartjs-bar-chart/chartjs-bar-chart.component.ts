import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-bar-chart',
  templateUrl: './chartjs-bar-chart.component.html',
  styleUrl: './chartjs-bar-chart.component.scss'
})
export class ChartjsBarChartComponent {

  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartOptions = chartData.barChartChartOptions;
  public barChartChartLegend = chartData.barChartChartLegend;

}
