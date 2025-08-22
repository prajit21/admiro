import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-advanced-smil-animations',
    imports: [CommonModule, ChartistModule],
    templateUrl: './advanced-smil-animations.html',
    styleUrl: './advanced-smil-animations.scss'
})
export class AdvancedSmilAnimations {

  public chart2 = chartData.chart2;

}
