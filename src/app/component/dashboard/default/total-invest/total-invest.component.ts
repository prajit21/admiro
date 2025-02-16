import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { incomchart } from '../../../../shared/data/dashboard/default/default-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-total-invest',
    imports: [CommonModule, NgApexchartsModule, ClickOutsideDirective],
    templateUrl: './total-invest.component.html',
    styleUrl: './total-invest.component.scss'
})
export class TotalInvestComponent {

  public IncomeChart = incomchart;

  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
