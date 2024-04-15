import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-dount-svg-animate',
  templateUrl: './dount-svg-animate.component.html',
  styleUrl: './dount-svg-animate.component.scss'
})
export class DountSvgAnimateComponent {

  public chart3 = chartData.chart3;

}
