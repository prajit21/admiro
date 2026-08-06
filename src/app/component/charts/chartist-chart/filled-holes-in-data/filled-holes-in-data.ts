import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-filled-holes-in-data',
  imports: [ChartistModule],
  templateUrl: './filled-holes-in-data.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './filled-holes-in-data.scss',
})
export class FilledHolesInData {
  public chart12 = chartData.chart12;
}
