import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-bi-polar-bar-chart',
  templateUrl: './bi-polar-bar-chart.component.html',
  styleUrl: './bi-polar-bar-chart.component.scss'
})
export class BiPolarBarChartComponent {

  public chart6 = chartData.chart6;


}
