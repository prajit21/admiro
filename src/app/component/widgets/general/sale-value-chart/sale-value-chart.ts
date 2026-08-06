import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { saleValue } from '../../../../shared/data/widgets/general/general-chart';

@Component({
  selector: 'app-sale-value-chart',
  imports: [NgApexchartsModule],
  templateUrl: './sale-value-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sale-value-chart.scss',
})
export class SaleValueChart {
  public salevalueChart = saleValue;
}
