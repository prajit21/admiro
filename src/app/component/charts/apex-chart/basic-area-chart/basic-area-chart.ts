import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-basic-area-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './basic-area-chart.html',
    styleUrl: './basic-area-chart.scss'
})
export class BasicAreaChart {

  public BasicAreaChart = chartData.basicArea;

}
