import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrl: './polar-chart.component.scss'
})
export class PolarChartComponent {

  public PolarChart = chartData.Polar;

}
