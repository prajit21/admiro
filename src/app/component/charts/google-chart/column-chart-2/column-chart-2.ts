import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-column-chart-2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './column-chart-2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './column-chart-2.scss',
})
export class ColumnChart2 {
  public columnChart2 = chartData.columnChart2;
}
