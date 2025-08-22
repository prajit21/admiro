import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-apex-column-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './apex-column-chart.html',
    styleUrl: './apex-column-chart.scss'
})
export class ApexColumnChart {

  public columnChart2 = chartData.columnChart2;

}
