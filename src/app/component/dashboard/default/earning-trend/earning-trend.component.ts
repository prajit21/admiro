import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EarningsTrend } from '../../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-earning-trend',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './earning-trend.component.html',
  styleUrl: './earning-trend.component.scss'
})
export class EarningTrendComponent {

  public earningChart = EarningsTrend

}
