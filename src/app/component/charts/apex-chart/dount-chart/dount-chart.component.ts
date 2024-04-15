import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-dount-chart',
  templateUrl: './dount-chart.component.html',
  styleUrl: './dount-chart.component.scss'
})
export class DountChartComponent {

  public donutChart = chartData.donutChart;

}
