import { Component } from '@angular/core';
import { SalesAnalyticsComponent } from './sales-analytics/sales-analytics.component';
import { TopEcommerceChartComponent } from './top-ecommerce-chart/top-ecommerce-chart.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { CommonValueChartComponent } from './common-value-chart/common-value-chart.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { salesvaluechart, visitorchart } from '../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { SellingChartComponent } from './selling-chart/selling-chart.component';
import { ProductOfferComponent } from './product-offer/product-offer.component';
import { ProductOffer2Component } from './product-offer2/product-offer2.component';
import { ActivityTimelineComponent } from './activity-timeline/activity-timeline.component';
import { EcommerceCardComponent } from './ecommerce-card/ecommerce-card.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [SalesAnalyticsComponent, TopEcommerceChartComponent, UserStatusComponent, TopSellingProductsComponent
    , CommonValueChartComponent, BestSellerComponent, SellingChartComponent, ProductOfferComponent, ProductOffer2Component
    , ActivityTimelineComponent, EcommerceCardComponent, RecentOrdersComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

  public salesValueChart = salesvaluechart;
  public visitorChart = visitorchart;

}
