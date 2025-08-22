import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-candlestick-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './candlestick-chart.html',
    styleUrl: './candlestick-chart.scss'
})
export class CandlestickChart {

  public candlestickChart = chartData.candleChart;

}
