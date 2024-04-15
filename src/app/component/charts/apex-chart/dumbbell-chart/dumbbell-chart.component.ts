import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-dumbbell-chart',
  templateUrl: './dumbbell-chart.component.html',
  styleUrl: './dumbbell-chart.component.scss'
})
export class DumbbellChartComponent {

  public dumbbellChart = chartData.DumbbellChart;

}
