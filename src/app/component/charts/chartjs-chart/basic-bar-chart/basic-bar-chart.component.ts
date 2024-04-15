import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-basic-bar-chart',
  templateUrl: './basic-bar-chart.component.html',
  styleUrl: './basic-bar-chart.component.scss'
})
export class BasicBarChartComponent {

  public basiclineChartLabels = chartData.basicLineLabels;
  public basiclineChartData = chartData.basicChartData;
  public basiclineChartType = chartData.basicLineChartType;
  public basiclineChartOptions = chartData.basicLineChartOptions;

}
