import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalInvestmentChart } from '../../../../shared/data/dashboard/default/default-charts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-total-investment',
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: './total-investment.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './total-investment.scss',
})
export class TotalInvestment {
  public InvestmentChart = TotalInvestmentChart;

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
