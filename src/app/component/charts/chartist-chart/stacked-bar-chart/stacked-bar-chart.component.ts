import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-stacked-bar-chart',
  standalone: true,
  imports: [CommonModule, ChartistModule],
  templateUrl: './stacked-bar-chart.component.html',
  styleUrl: './stacked-bar-chart.component.scss'
})
export class StackedBarChartComponent {

  public chart7 = chartData.chart7;

}
