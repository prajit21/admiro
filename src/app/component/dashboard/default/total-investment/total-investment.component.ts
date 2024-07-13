import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TotalInvestment } from '../../../../shared/data/dashboard/default/default-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-total-investment',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './total-investment.component.html',
  styleUrl: './total-investment.component.scss'
})
export class TotalInvestmentComponent {

  public InvestmentChart = TotalInvestment;

  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }


}
