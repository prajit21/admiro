import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-radar-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './radar-chart.html',
    styleUrl: './radar-chart.scss'
})
export class RadarChart {

  public radarChart = chartData.radarChart;

}
