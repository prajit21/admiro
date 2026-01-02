import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { EarningsTrend } from '../../../../shared/data/dashboard/default/default-charts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-earning-trend',
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: './earning-trend.html',
  styleUrl: './earning-trend.scss',
})
export class EarningTrend {
  public earningChart = EarningsTrend;

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
