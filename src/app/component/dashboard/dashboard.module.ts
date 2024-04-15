import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ManageInvoiceComponent } from './default/manage-invoice/manage-invoice.component';
import { TopDefaultCardComponent } from './default/top-default-card/top-default-card.component';
import { EarningTrendComponent } from './default/earning-trend/earning-trend.component';
import { TransitionHistoryComponent } from './default/transition-history/transition-history.component';
import { AuditLogComponent } from './default/audit-log/audit-log.component';
import { TotalInvestmentComponent } from './default/total-investment/total-investment.component';
import { LetestActivityComponent } from './default/letest-activity/letest-activity.component';
import { MonthlyRevenueGrowthComponent } from './default/monthly-revenue-growth/monthly-revenue-growth.component';
import { NewsUpdateComponent } from './default/news-update/news-update.component';
import { TotalInvestComponent } from './default/total-invest/total-invest.component';
import { JobTodayComponent } from './default/job-today/job-today.component';
import { TopUsersComponent } from './default/top-users/top-users.component';
import { SalesAnalyticsComponent } from './ecommerce/sales-analytics/sales-analytics.component';
import { UserStatusComponent } from './ecommerce/user-status/user-status.component';
import { TopEcommerceChartComponent } from './ecommerce/top-ecommerce-chart/top-ecommerce-chart.component';
import { TopSellingProductsComponent } from './ecommerce/top-selling-products/top-selling-products.component';
import { CommonValueChartComponent } from './ecommerce/common-value-chart/common-value-chart.component';
import { BestSellerComponent } from './ecommerce/best-seller/best-seller.component';
import { SellingChartComponent } from './ecommerce/selling-chart/selling-chart.component';
import { ProductOfferComponent } from './ecommerce/product-offer/product-offer.component';
import { ProductOffer2Component } from './ecommerce/product-offer2/product-offer2.component';
import { ActivityTimelineComponent } from './ecommerce/activity-timeline/activity-timeline.component';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';
import { RecentOrdersComponent } from './ecommerce/recent-orders/recent-orders.component';
import { EducationComponent } from './education/education.component';
import { TopCommonEducationchartComponent } from './education/top-common-educationchart/top-common-educationchart.component';
import { UpcomingClassesComponent } from './education/upcoming-classes/upcoming-classes.component';
import { SchoolPerformanceComponent } from './education/school-performance/school-performance.component';
import { NoticeBoardComponent } from './education/notice-board/notice-board.component';
import { StudentDetailsComponent } from './education/student-details/student-details.component';
import { NewCoursesComponent } from './education/new-courses/new-courses.component';
import { LearningChartComponent } from './education/learning-chart/learning-chart.component';
import { ToDoListComponent } from './education/to-do-list/to-do-list.component';
import { AssignmentsComponent } from './education/assignments/assignments.component';
import { ScheduleLessonComponent } from './education/schedule-lesson/schedule-lesson.component';


@NgModule({
  declarations: [
    DefaultComponent,
    EcommerceComponent,
    ManageInvoiceComponent,
    TopDefaultCardComponent,
    EarningTrendComponent,
    TransitionHistoryComponent,
    AuditLogComponent,
    TotalInvestmentComponent,
    LetestActivityComponent,
    MonthlyRevenueGrowthComponent,
    NewsUpdateComponent,
    TotalInvestComponent,
    JobTodayComponent,
    TopUsersComponent,
    SalesAnalyticsComponent,
    UserStatusComponent,
    TopEcommerceChartComponent,
    TopSellingProductsComponent,
    CommonValueChartComponent,
    BestSellerComponent,
    SellingChartComponent,
    ProductOfferComponent,
    ProductOffer2Component,
    ActivityTimelineComponent,
    EcommerceCardComponent,
    RecentOrdersComponent,
    EducationComponent,
    TopCommonEducationchartComponent,
    UpcomingClassesComponent,
    SchoolPerformanceComponent,
    NoticeBoardComponent,
    StudentDetailsComponent,
    NewCoursesComponent,
    LearningChartComponent,
    ToDoListComponent,
    AssignmentsComponent,
    ScheduleLessonComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    SharedModule,
    NgbDatepickerModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TotalInvestmentComponent,
    CommonValueChartComponent,
    ProductOfferComponent,
    ProductOffer2Component,
    SellingChartComponent,
    UpcomingClassesComponent,
    MonthlyRevenueGrowthComponent,
    ScheduleLessonComponent
  ]
})
export class DashboardModule { }
