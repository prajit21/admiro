import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrl: './bubble-chart.component.scss'
})
export class BubbleChartComponent {

  public bubbleChart = chartData.bubbleChart;

}
