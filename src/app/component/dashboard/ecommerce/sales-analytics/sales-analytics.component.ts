import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SalesAnalytics } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-sales-analytics',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-analytics.component.html',
  styleUrl: './sales-analytics.component.scss'
})
export class SalesAnalyticsComponent {

  public salesAnalytics = SalesAnalytics;

}
