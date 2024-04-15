import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-advanced-smil-animations',
  templateUrl: './advanced-smil-animations.component.html',
  styleUrl: './advanced-smil-animations.component.scss'
})
export class AdvancedSmilAnimationsComponent {

  public chart2 = chartData.chart2;

}
