import { Component } from '@angular/core';
import { orderBarchart, overviewChart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-top-ecommerce-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,ClickOutsideDirective],
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
