import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-google-line-chart',
  templateUrl: './google-line-chart.component.html',
  styleUrl: './google-line-chart.component.scss'
})
export class GoogleLineChartComponent {

  public lineChart = chartData.lineChart;

}
