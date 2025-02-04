import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-candlestick-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './candlestick-chart.component.html',
    styleUrl: './candlestick-chart.component.scss'
})
export class CandlestickChartComponent {

  public candlestickChart = chartData.candleChart;

}
