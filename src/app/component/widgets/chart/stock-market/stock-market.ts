import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StockMarketChart } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-stock-market',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './stock-market.html',
    styleUrl: './stock-market.scss'
})
export class StockMarket {

  public stockMarkeData = StockMarketChart;

}
