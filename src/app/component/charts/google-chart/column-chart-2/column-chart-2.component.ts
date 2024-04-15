import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';


@Component({
  selector: 'app-column-chart-2',
  templateUrl: './column-chart-2.component.html',
  styleUrl: './column-chart-2.component.scss'
})
export class ColumnChart2Component {

  public columnChart2 = chartData.columnChart2;


}
