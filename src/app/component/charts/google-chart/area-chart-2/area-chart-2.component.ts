import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-area-chart-2',
  templateUrl: './area-chart-2.component.html',
  styleUrl: './area-chart-2.component.scss'
})
export class AreaChart2Component {

  public areaChart2 = chartData.areaChart2;

}
