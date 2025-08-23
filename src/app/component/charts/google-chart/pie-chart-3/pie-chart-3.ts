import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart-3',
  imports: [CommonModule, Ng2GoogleChartsModule],
  templateUrl: './pie-chart-3.html',
  styleUrl: './pie-chart-3.scss',
})
export class PieChart3 {
  public pieChart3 = chartData.pieChart3;
}
