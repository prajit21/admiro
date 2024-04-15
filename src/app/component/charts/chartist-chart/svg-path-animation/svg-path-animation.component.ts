import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-svg-path-animation',
  templateUrl: './svg-path-animation.component.html',
  styleUrl: './svg-path-animation.component.scss'
})
export class SvgPathAnimationComponent {

  public chart10 = chartData.chart10;

}
