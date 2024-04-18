import { Component } from '@angular/core';
import { orderBarchart, overviewChart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-top-ecommerce-chart',
  templateUrl: './top-ecommerce-chart.component.html',
  styleUrl: './top-ecommerce-chart.component.scss'
})
export class TopEcommerceChartComponent {

  public orverViewChart = overviewChart;
  public orderBarChart = orderBarchart;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
