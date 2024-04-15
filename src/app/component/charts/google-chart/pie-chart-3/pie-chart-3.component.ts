import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart-3',
  templateUrl: './pie-chart-3.component.html',
  styleUrl: './pie-chart-3.component.scss'
})
export class PieChart3Component {

  public pieChart3 = chartData.pieChart3;

}
