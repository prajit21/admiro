import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-radar-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './radar-chart.component.html',
    styleUrl: './radar-chart.component.scss'
})
export class RadarChartComponent {

  public radarChart = chartData.radarChart;

}
