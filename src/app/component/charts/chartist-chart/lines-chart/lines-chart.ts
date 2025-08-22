import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-lines-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './lines-chart.html',
    styleUrl: './lines-chart.scss'
})
export class LinesChart {

  public LineChart = chartData.chart1;

}
