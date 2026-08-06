import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { InvestmentChart } from '../../../../shared/data/widgets/general/general-chart';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-general-total-tnvestment',
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: './general-total-tnvestment.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './general-total-tnvestment.scss',
})
export class GeneralTotalTnvestment {
  public InvestmentChart = InvestmentChart;

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
