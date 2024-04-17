import { Component } from '@angular/core';
import { incomchart } from '../../../../shared/data/dashboard/default/default-charts';

@Component({
  selector: 'app-total-invest',
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
