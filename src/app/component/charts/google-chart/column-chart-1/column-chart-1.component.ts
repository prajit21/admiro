import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-column-chart-1',
  templateUrl: './column-chart-1.component.html',
  styleUrl: './column-chart-1.component.scss'
})
export class ColumnChart1Component {

  public columnChart1 = chartData.columnChart1;

}
