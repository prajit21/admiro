import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuditLog } from './audit-log/audit-log';
import { JobToday } from './job-today/job-today';
import { LetestActivity } from './letest-activity/letest-activity';
import { ManageInvoice } from './manage-invoice/manage-invoice';
import { MonthlyRevenueGrowth } from './monthly-revenue-growth/monthly-revenue-growth';
import { NewsUpdate } from './news-update/news-update';
import { TopDefaultCard } from './top-default-card/top-default-card';
import { TopUsers } from './top-users/top-users';
import { TotalInvest } from './total-invest/total-invest';
import { TotalInvestment } from './total-investment/total-investment';
import { TransitionHistory } from './transition-history/transition-history';
import { EarningTrend } from './earning-trend/earning-trend';

@Component({
    selector: 'app-default',
    imports: [CommonModule, AuditLog, JobToday, LetestActivity, ManageInvoice,
        MonthlyRevenueGrowth, NewsUpdate, TopDefaultCard, TopUsers, TotalInvest,
        TotalInvestment, TransitionHistory, EarningTrend],
    templateUrl: './default.html',
    styleUrl: './default.scss'
})
export class Default {

}
