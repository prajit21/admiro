import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-apex-column-chart',
  templateUrl: './apex-column-chart.component.html',
  styleUrl: './apex-column-chart.component.scss'
})
export class ApexColumnChartComponent {

  public columnChart2 = chartData.columnChart2;

}
