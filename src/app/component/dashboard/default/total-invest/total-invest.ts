import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { incomchart } from '../../../../shared/data/dashboard/default/default-charts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-total-invest',
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: './total-invest.html',
  styleUrl: './total-invest.scss',
})
export class TotalInvest {
  public IncomeChart = incomchart;

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
