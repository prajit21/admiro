import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-bubble-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './bubble-chart.html',
    styleUrl: './bubble-chart.scss'
})
export class BubbleChart {

  public bubbleChart = chartData.bubbleChart;

}
