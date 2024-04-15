import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart-1',
  templateUrl: './pie-chart-1.component.html',
  styleUrl: './pie-chart-1.component.scss'
})
export class PieChart1Component {

  public pieChart1 = chartData.pieChart1;

}
