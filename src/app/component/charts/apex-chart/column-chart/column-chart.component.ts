import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.scss'
})
export class ColumnChartComponent {

  public columnChart = chartData.columnChart;

}
