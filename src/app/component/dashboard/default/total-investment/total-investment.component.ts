import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TotalInvestment } from '../../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-total-investment',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './total-investment.component.html',
  styleUrl: './total-investment.component.scss'
})
export class TotalInvestmentComponent {

  public InvestmentChart = TotalInvestment

}
