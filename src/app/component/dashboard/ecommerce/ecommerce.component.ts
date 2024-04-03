import { Component } from '@angular/core';
import { SalesAnalyticsComponent } from './sales-analytics/sales-analytics.component';
import { TopEcommerceChartComponent } from './top-ecommerce-chart/top-ecommerce-chart.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { CommonValueChartComponent } from './common-value-chart/common-value-chart.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { salesvaluechart, visitorchart } from '../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [SalesAnalyticsComponent, TopEcommerceChartComponent, UserStatusComponent, TopSellingProductsComponent
    , CommonValueChartComponent, BestSellerComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

  public salesValueChart = salesvaluechart;
  public visitorChart = visitorchart;

}
