import { Component } from '@angular/core';
import { TopDefaultCardComponent } from './top-default-card/top-default-card.component';
import { EarningTrendComponent } from './earning-trend/earning-trend.component';
import { JobTodayComponent } from './job-today/job-today.component';
import { TransitionHistoryComponent } from './transition-history/transition-history.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { TotaInvestComponent } from './tota-invest/tota-invest.component';
import { LetestActivityComponent } from './letest-activity/letest-activity.component';
import { MonthlyRevenueGrowthComponent } from './monthly-revenue-growth/monthly-revenue-growth.component';
import { TopUsersComponent } from './top-users/top-users.component';
import { NewsUpdateComponent } from './news-update/news-update.component';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { TotalInvestmentComponent } from './total-investment/total-investment.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [TopDefaultCardComponent, EarningTrendComponent, JobTodayComponent, TransitionHistoryComponent
    , AuditLogComponent, TotaInvestComponent, LetestActivityComponent, MonthlyRevenueGrowthComponent, TopUsersComponent,
    NewsUpdateComponent, TotaInvestComponent, ManageInvoiceComponent, TotalInvestmentComponent,],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
