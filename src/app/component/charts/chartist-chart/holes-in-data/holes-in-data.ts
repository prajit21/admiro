import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-holes-in-data',
  imports: [ChartistModule],
  templateUrl: './holes-in-data.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './holes-in-data.scss',
})
export class HolesInData {
  public chart11 = chartData.chart11;
}
