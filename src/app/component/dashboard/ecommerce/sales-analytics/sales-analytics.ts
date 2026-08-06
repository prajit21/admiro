import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SalesAnalyticsChart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-sales-analytics',
  imports: [NgApexchartsModule],
  templateUrl: './sales-analytics.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sales-analytics.scss',
})
export class SalesAnalytics {
  public salesAnalytics = SalesAnalyticsChart;

  public openTab: string = 'Weekly';

  tab(value: string) {
    this.openTab = value;
  }
}
