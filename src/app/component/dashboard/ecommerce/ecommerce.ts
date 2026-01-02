import { Component } from '@angular/core';

import { ActivityTimeline } from './activity-timeline/activity-timeline';
import { BestSeller } from './best-seller/best-seller';
import { CommonValueChart } from './common-value-chart/common-value-chart';
import { EcommerceCard } from './ecommerce-card/ecommerce-card';
import { ProductOffer } from './product-offer/product-offer';
import { ProductOffer2 } from './product-offer2/product-offer2';
import { RecentOrders } from './recent-orders/recent-orders';
import { SalesAnalytics } from './sales-analytics/sales-analytics';
import { SellingChart } from './selling-chart/selling-chart';
import { TopEcommerceChart } from './top-ecommerce-chart/top-ecommerce-chart';
import { TopSellingProducts } from './top-selling-products/top-selling-products';
import { UserStatus } from './user-status/user-status';
import {
  salesvaluechart,
  visitorchart,
} from '../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-ecommerce',
  imports: [
    ActivityTimeline,
    BestSeller,
    CommonValueChart,
    EcommerceCard,
    ProductOffer,
    ProductOffer2,
    RecentOrders,
    SalesAnalytics,
    SellingChart,
    TopEcommerceChart,
    TopSellingProducts,
    UserStatus,
  ],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.scss',
})
export class Ecommerce {
  public salesValueChart = salesvaluechart;
  public visitorChart = visitorchart;
}
