import { Component } from '@angular/core';
import { InvestmentChart } from '../../../../shared/data/widgets/general/general-chart';

@Component({
  selector: 'app-general-total-tnvestment',
  templateUrl: './general-total-tnvestment.component.html',
  styleUrl: './general-total-tnvestment.component.scss'
})
export class GeneralTotalTnvestmentComponent {

  public InvestmentChart = InvestmentChart;

  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
