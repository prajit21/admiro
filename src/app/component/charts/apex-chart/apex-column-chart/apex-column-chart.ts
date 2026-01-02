
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-apex-column-chart',
  imports: [NgApexchartsModule],
  templateUrl: './apex-column-chart.html',
  styleUrl: './apex-column-chart.scss',
})
export class ApexColumnChart {
  public columnChart2 = chartData.columnChart2;
}
