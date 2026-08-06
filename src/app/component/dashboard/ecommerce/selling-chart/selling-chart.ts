import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgApexchartsModule } from 'ng-apexcharts';

import { sellingchart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-selling-chart',
  imports: [NgApexchartsModule, RouterModule],
  templateUrl: './selling-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './selling-chart.scss',
})
export class SellingChart {
  public sellingChart = sellingchart;
}
