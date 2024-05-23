import { Component } from '@angular/core';
import { stockValue } from '../../../../shared/data/widgets/general/general-chart';

@Component({
  selector: 'app-stock-value-chart',
  templateUrl: './stock-value-chart.component.html',
  styleUrl: './stock-value-chart.component.scss'
})
export class StockValueChartComponent {

  public stockChart = stockValue;

}
