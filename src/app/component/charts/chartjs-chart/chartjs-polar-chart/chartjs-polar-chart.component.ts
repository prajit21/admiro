import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-polar-chart',
  templateUrl: './chartjs-polar-chart.component.html',
  styleUrl: './chartjs-polar-chart.component.scss'
})
export class ChartjsPolarChartComponent {

  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;

}
