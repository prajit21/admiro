import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-line-area-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './line-area-chart.html',
    styleUrl: './line-area-chart.scss'
})
export class LineAreaChart {

  public chart5 = chartData.chart5;

}
