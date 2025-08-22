import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CryptocurrencyPricesChart } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-cryptocurrency-prices',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './cryptocurrency-prices.html',
    styleUrl: './cryptocurrency-prices.scss'
})
export class CryptocurrencyPrices {

  public CryptocurrencyPricesChart = CryptocurrencyPricesChart;

}
