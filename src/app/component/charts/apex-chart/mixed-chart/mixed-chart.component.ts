import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrl: './mixed-chart.component.scss'
})
export class MixedChartComponent {

  public MixedChart = chartData.MixedChart;

}
