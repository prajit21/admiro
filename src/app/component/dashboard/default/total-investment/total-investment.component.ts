import { Component } from '@angular/core';
import { TotalInvestment } from '../../../../shared/data/dashboard/default/default-charts';

@Component({
  selector: 'app-total-investment',
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
