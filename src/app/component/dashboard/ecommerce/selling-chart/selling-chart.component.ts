import { Component } from '@angular/core';
import { sellingchart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-selling-chart',
  templateUrl: './selling-chart.component.html',
  styleUrl: './selling-chart.component.scss'
})
export class SellingChartComponent {

  public sellingChart = sellingchart;

}
