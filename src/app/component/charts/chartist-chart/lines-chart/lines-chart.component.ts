import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-lines-chart',
  templateUrl: './lines-chart.component.html',
  styleUrl: './lines-chart.component.scss'
})
export class LinesChartComponent {

  public LineChart = chartData.chart1;

}
