import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { sellingchart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-selling-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './selling-chart.component.html',
  styleUrl: './selling-chart.component.scss'
})
export class SellingChartComponent {

  public sellingChart = sellingchart;

}
