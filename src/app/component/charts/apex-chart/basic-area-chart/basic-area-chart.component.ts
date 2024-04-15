import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.component.html',
  styleUrl: './basic-area-chart.component.scss'
})
export class BasicAreaChartComponent {

  public BasicAreaChart = chartData.basicArea;

}
