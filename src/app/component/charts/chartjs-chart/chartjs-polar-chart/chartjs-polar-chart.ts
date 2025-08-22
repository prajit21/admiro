import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-chartjs-polar-chart',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './chartjs-polar-chart.html',
    styleUrl: './chartjs-polar-chart.scss'
})
export class ChartjsPolarChart {

  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;

}
