import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart-4',
  templateUrl: './pie-chart-4.component.html',
  styleUrl: './pie-chart-4.component.scss'
})
export class PieChart4Component {

  public pieChart4 = chartData.pieChart4;

}
