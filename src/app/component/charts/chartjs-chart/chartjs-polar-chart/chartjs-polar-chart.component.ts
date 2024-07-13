import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartjs-polar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
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
