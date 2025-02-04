import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-dount-svg-animate',
    imports: [CommonModule, ChartistModule],
    templateUrl: './dount-svg-animate.component.html',
    styleUrl: './dount-svg-animate.component.scss'
})
export class DountSvgAnimateComponent {

  public chart3 = chartData.chart3;

}
