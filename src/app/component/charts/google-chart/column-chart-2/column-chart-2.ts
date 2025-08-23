import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-column-chart-2',
  imports: [CommonModule, Ng2GoogleChartsModule],
  templateUrl: './column-chart-2.html',
  styleUrl: './column-chart-2.scss',
})
export class ColumnChart2 {
  public columnChart2 = chartData.columnChart2;
}
