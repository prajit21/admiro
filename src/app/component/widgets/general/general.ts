import { Component } from '@angular/core';

import { CustomersDetails } from './customers-details/customers-details';
import { GeneralTotalTnvestment } from './general-total-tnvestment/general-total-tnvestment';
import { SaleValueChart } from './sale-value-chart/sale-value-chart';
import { SalesPurchase } from './sales-purchase/sales-purchase';
import { StockValueChart } from './stock-value-chart/stock-value-chart';
import { MonthlyRevenueGrowth } from '../../dashboard/default/monthly-revenue-growth/monthly-revenue-growth';
import { ProductOffer } from '../../dashboard/ecommerce/product-offer/product-offer';
import { ProductOffer2 } from '../../dashboard/ecommerce/product-offer2/product-offer2';
import { SellingChart } from '../../dashboard/ecommerce/selling-chart/selling-chart';
import { ScheduleLesson } from '../../dashboard/education/schedule-lesson/schedule-lesson';
import { UpcomingClasses } from '../../dashboard/education/upcoming-classes/upcoming-classes';

@Component({
  selector: 'app-general',
  imports: [
    CustomersDetails,
    GeneralTotalTnvestment,
    SaleValueChart,
    SalesPurchase,
    StockValueChart,
    ProductOffer,
    ProductOffer2,
    SalesPurchase,
    SellingChart,
    ScheduleLesson,
    UpcomingClasses,
    MonthlyRevenueGrowth,
  ],
  templateUrl: './general.html',
  styleUrl: './general.scss',
})
export class General {}
