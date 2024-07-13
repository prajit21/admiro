import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { salesvaluechart, visitorchart } from '../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { ActivityTimelineComponent } from './activity-timeline/activity-timeline.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CommonValueChartComponent } from './common-value-chart/common-value-chart.component';
import { EcommerceCardComponent } from './ecommerce-card/ecommerce-card.component';
import { ProductOfferComponent } from './product-offer/product-offer.component';
import { ProductOffer2Component } from './product-offer2/product-offer2.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { SalesAnalyticsComponent } from './sales-analytics/sales-analytics.component';
import { SellingChartComponent } from './selling-chart/selling-chart.component';
import { TopEcommerceChartComponent } from './top-ecommerce-chart/top-ecommerce-chart.component';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { UserStatusComponent } from './user-status/user-status.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CommonModule, ActivityTimelineComponent, BestSellerComponent, CommonValueChartComponent
    , EcommerceCardComponent, ProductOfferComponent, ProductOffer2Component, RecentOrdersComponent
    , SalesAnalyticsComponent, SellingChartComponent, TopEcommerceChartComponent, TopSellingProductsComponent,
    UserStatusComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

  public salesValueChart = salesvaluechart;
  public visitorChart = visitorchart;

}
