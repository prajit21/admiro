import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart-2',
  templateUrl: './pie-chart-2.component.html',
  styleUrl: './pie-chart-2.component.scss'
})
export class PieChart2Component {

  public pieChart2 = chartData.pieChart2;

}
