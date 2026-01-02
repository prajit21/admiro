import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { stockValue } from '../../../../shared/data/widgets/general/general-chart';

@Component({
  selector: 'app-stock-value-chart',
  imports: [NgApexchartsModule],
  templateUrl: './stock-value-chart.html',
  styleUrl: './stock-value-chart.scss',
})
export class StockValueChart {
  public stockChart = stockValue;
}
