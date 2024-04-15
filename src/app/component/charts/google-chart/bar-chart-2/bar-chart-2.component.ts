import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-bar-chart-2',
  templateUrl: './bar-chart-2.component.html',
  styleUrl: './bar-chart-2.component.scss'
})
export class BarChart2Component {

  public barChart2 = chartData.barChart2;

}
