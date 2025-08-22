import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-pie-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './pie-chart.html',
    styleUrl: './pie-chart.scss'
})
export class PieChart {

  public pieChart = chartData.pieChart;

}
