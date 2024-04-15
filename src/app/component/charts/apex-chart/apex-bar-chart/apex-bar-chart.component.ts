import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-apex-bar-chart',
  templateUrl: './apex-bar-chart.component.html',
  styleUrl: './apex-bar-chart.component.scss'
})
export class ApexBarChartComponent {

  public barChart = chartData.barChart;

}
