import { Component } from '@angular/core';
import { StockMarket } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrl: './stock-market.component.scss'
})
export class StockMarketComponent {

  public stockMarkeData = StockMarket;

}
