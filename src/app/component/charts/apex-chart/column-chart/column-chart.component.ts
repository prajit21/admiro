import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-column-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './column-chart.component.html',
    styleUrl: './column-chart.component.scss'
})
export class ColumnChartComponent {

  public columnChart = chartData.columnChart;

}
