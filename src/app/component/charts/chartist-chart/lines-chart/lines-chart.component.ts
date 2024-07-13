import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-lines-chart',
  standalone: true,
  imports: [CommonModule, ChartistModule],
  templateUrl: './lines-chart.component.html',
  styleUrl: './lines-chart.component.scss'
})
export class LinesChartComponent {

  public LineChart = chartData.chart1;

}
