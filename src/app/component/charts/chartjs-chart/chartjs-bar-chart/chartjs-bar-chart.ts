import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-chartjs-bar-chart',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './chartjs-bar-chart.html',
    styleUrl: './chartjs-bar-chart.scss'
})
export class ChartjsBarChart {

  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartOptions = chartData.barChartChartOptions;
  public barChartChartLegend = chartData.barChartChartLegend;

}
