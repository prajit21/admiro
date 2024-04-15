import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrl: './combo-chart.component.scss'
})
export class ComboChartComponent {

  public comboChart = chartData.comboChart;

}
