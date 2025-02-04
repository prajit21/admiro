import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-svg-path-animation',
    imports: [CommonModule, ChartistModule],
    templateUrl: './svg-path-animation.component.html',
    styleUrl: './svg-path-animation.component.scss'
})
export class SvgPathAnimationComponent {

  public chart10 = chartData.chart10;

}
