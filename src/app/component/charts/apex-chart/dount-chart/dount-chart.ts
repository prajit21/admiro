import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-dount-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './dount-chart.html',
    styleUrl: './dount-chart.scss'
})
export class DountChart {

  public donutChart = chartData.donutChart;

}
