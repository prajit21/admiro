import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SalesValueChartInterface } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-common-value-chart',
  imports: [NgApexchartsModule],
  templateUrl: './common-value-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-value-chart.scss',
})
export class CommonValueChart {
  readonly data = input<SalesValueChartInterface>();
}
