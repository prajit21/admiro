import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrl: './radial-chart.component.scss'
})
export class RadialChartComponent {

  public radialBarChart = chartData.radialBarChart;

}
