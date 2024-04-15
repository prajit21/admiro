import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-basic-lines-chart',
  templateUrl: './basic-lines-chart.component.html',
  styleUrl: './basic-lines-chart.component.scss'
})
export class BasicLinesChartComponent {

  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartOptions = chartData.barChartChartOptions;

}
