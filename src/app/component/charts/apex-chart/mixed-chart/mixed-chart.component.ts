import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-mixed-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './mixed-chart.component.html',
    styleUrl: './mixed-chart.component.scss'
})
export class MixedChartComponent {

  public MixedChart = chartData.MixedChart;

}
