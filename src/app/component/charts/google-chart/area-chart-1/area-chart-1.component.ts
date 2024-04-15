import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-area-chart-1',
  templateUrl: './area-chart-1.component.html',
  styleUrl: './area-chart-1.component.scss'
})
export class AreaChart1Component {

  public areaChart1 = chartData.areaChart1

}
