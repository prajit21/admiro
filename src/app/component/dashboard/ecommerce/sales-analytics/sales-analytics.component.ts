import { Component } from '@angular/core';
import { SalesAnalytics } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-sales-analytics',
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
