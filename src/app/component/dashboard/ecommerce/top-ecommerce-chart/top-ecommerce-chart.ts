import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import {
  orderBarchart,
  overviewChart,
} from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-top-ecommerce-chart',
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: './top-ecommerce-chart.html',
  styleUrl: './top-ecommerce-chart.scss',
})
export class TopEcommerceChart {
  public orverViewChart = overviewChart;
  public orderBarChart = orderBarchart;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
