import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-line-area-chart',
  templateUrl: './line-area-chart.component.html',
  styleUrl: './line-area-chart.component.scss'
})
export class LineAreaChartComponent {

  public chart5 = chartData.chart5;

}
