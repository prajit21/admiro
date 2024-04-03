import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { incomchart } from '../../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-tota-invest',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './tota-invest.component.html',
  styleUrl: './tota-invest.component.scss'
})
export class TotaInvestComponent {
 
  public IncomeChart = incomchart;

}
