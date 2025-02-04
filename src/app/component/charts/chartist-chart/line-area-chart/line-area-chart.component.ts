import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-line-area-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './line-area-chart.component.html',
    styleUrl: './line-area-chart.component.scss'
})
export class LineAreaChartComponent {

  public chart5 = chartData.chart5;

}
