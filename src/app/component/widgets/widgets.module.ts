import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardModule } from '../dashboard/dashboard.module';
import { WidgetsRoutingModule } from './widgets-routing.module';

import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { CommonWidgetsChartComponent } from './chart/common-widgets-chart/common-widgets-chart.component';
import { MonthlyHistoryComponent } from './chart/monthly-history/monthly-history.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { LiveProductsComponent } from './chart/live-products/live-products.component';
import { TrunOverComponent } from './chart/trun-over/trun-over.component';
import { CryptocurrencyPricesComponent } from './chart/cryptocurrency-prices/cryptocurrency-prices.component';
import { CryptAnnotationsComponent } from './chart/crypt-annotations/crypt-annotations.component';
import { StockMarketComponent } from './chart/stock-market/stock-market.component';
import { FinanceComponent } from './chart/finance/finance.component';
import { OrderStatus2Component } from './chart/order-status2/order-status2.component';
import { MonthlySalesComponent } from './chart/monthly-sales/monthly-sales.component';
import { UsesComponent } from './chart/uses/uses.component';
import { SalesPurchaseComponent } from './general/sales-purchase/sales-purchase.component';
import { CustomersDetailsComponent } from './general/customers-details/customers-details.component';

@NgModule({
  declarations: [
    GeneralComponent,
    ChartComponent,
    CommonWidgetsChartComponent,
    MonthlyHistoryComponent,
    SkillStatusComponent,
    OrderStatusComponent,
    LiveProductsComponent,
    TrunOverComponent,
    CryptocurrencyPricesComponent,
    CryptAnnotationsComponent,
    StockMarketComponent,
    FinanceComponent,
    OrderStatus2Component,
    MonthlySalesComponent,
    UsesComponent,
    SalesPurchaseComponent,
    CustomersDetailsComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    DashboardModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class WidgetsModule { }
