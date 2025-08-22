import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-stepline-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './stepline-chart.html',
    styleUrl: './stepline-chart.scss'
})
export class SteplineChart {

  public steplineChart = chartData.steplineChart;

}
