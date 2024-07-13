import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SalesAnalytics } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-sales-analytics',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './sales-analytics.component.html',
  styleUrl: './sales-analytics.component.scss'
})
export class SalesAnalyticsComponent {

  public salesAnalytics = SalesAnalytics;

  public openTab: string = "Weekly";

  tab(value:string){
      this.openTab = value
  }

}
