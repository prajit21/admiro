import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-bi-polar-line',
  templateUrl: './bi-polar-line.component.html',
  styleUrl: './bi-polar-line.component.scss'
})
export class BiPolarLineComponent {

  public chart4 = chartData.chart4;

}
