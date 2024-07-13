import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { JobTodayComponent } from './job-today/job-today.component';
import { LetestActivityComponent } from './letest-activity/letest-activity.component';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { MonthlyRevenueGrowthComponent } from './monthly-revenue-growth/monthly-revenue-growth.component';
import { NewsUpdateComponent } from './news-update/news-update.component';
import { TopDefaultCardComponent } from './top-default-card/top-default-card.component';
import { TopUsersComponent } from './top-users/top-users.component';
import { TotalInvestComponent } from './total-invest/total-invest.component';
import { TotalInvestmentComponent } from './total-investment/total-investment.component';
import { TransitionHistoryComponent } from './transition-history/transition-history.component';
import { EarningTrendComponent } from './earning-trend/earning-trend.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, AuditLogComponent, JobTodayComponent, LetestActivityComponent, ManageInvoiceComponent
    , MonthlyRevenueGrowthComponent, NewsUpdateComponent, TopDefaultCardComponent, TopUsersComponent, TotalInvestComponent
    , TotalInvestmentComponent,TransitionHistoryComponent,EarningTrendComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
