import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-column-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './column-chart.html',
    styleUrl: './column-chart.scss'
})
export class ColumnChart {

  public columnChart = chartData.columnChart;

}
