import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-pyramid-chart',
  templateUrl: './pyramid-chart.component.html',
  styleUrl: './pyramid-chart.component.scss'
})
export class PyramidChartComponent {

  public pyramidChart = chartData.PyramidChart;

}
