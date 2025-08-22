import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SalesAnalyticsChart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-sales-analytics',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './sales-analytics.html',
    styleUrl: './sales-analytics.scss'
})
export class SalesAnalytics {

  public salesAnalytics = SalesAnalyticsChart;

  public openTab: string = "Weekly";

  tab(value:string){
      this.openTab = value
  }

}
