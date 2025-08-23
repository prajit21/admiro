import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-basic-line-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './basic-line-chart.html',
  styleUrl: './basic-line-chart.scss',
})
export class BasicLineChart {
  public areaChart = chartData.areaSpalineChart;
}
