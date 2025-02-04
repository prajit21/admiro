import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-advanced-smil-animations',
    imports: [CommonModule, ChartistModule],
    templateUrl: './advanced-smil-animations.component.html',
    styleUrl: './advanced-smil-animations.component.scss'
})
export class AdvancedSmilAnimationsComponent {

  public chart2 = chartData.chart2;

}
