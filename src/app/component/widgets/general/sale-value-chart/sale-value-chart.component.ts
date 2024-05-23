import { Component } from '@angular/core';
import { saleValue } from '../../../../shared/data/widgets/general/general-chart';

@Component({
  selector: 'app-sale-value-chart',
  templateUrl: './sale-value-chart.component.html',
  styleUrl: './sale-value-chart.component.scss'
})
export class SaleValueChartComponent {

  public salevalueChart = saleValue;

}
