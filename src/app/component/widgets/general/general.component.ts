import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { GeneralTotalTnvestmentComponent } from './general-total-tnvestment/general-total-tnvestment.component';
import { SaleValueChartComponent } from './sale-value-chart/sale-value-chart.component';
import { SalesPurchaseComponent } from './sales-purchase/sales-purchase.component';
import { StockValueChartComponent } from './stock-value-chart/stock-value-chart.component';
import { ProductOfferComponent } from '../../dashboard/ecommerce/product-offer/product-offer.component';
import { ProductOffer2Component } from '../../dashboard/ecommerce/product-offer2/product-offer2.component';
import { SellingChartComponent } from '../../dashboard/ecommerce/selling-chart/selling-chart.component';
import { ScheduleLessonComponent } from '../../dashboard/education/schedule-lesson/schedule-lesson.component';
import { UpcomingClassesComponent } from '../../dashboard/education/upcoming-classes/upcoming-classes.component';
import { MonthlyRevenueGrowthComponent } from '../../dashboard/default/monthly-revenue-growth/monthly-revenue-growth.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [CommonModule, CustomersDetailsComponent, GeneralTotalTnvestmentComponent, SaleValueChartComponent
    , SalesPurchaseComponent, StockValueChartComponent,ProductOfferComponent,ProductOffer2Component,SalesPurchaseComponent
  ,SellingChartComponent,ScheduleLessonComponent,UpcomingClassesComponent,MonthlyRevenueGrowthComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {


}
