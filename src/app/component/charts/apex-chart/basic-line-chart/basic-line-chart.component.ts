import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrl: './basic-line-chart.component.scss'
})
export class BasicLineChartComponent {

  public areaChart = chartData.basicAreachart;

}
