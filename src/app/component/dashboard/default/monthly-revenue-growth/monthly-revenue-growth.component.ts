import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { growthChart } from '../../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-monthly-revenue-growth',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './monthly-revenue-growth.component.html',
  styleUrl: './monthly-revenue-growth.component.scss'
})
export class MonthlyRevenueGrowthComponent {

  public GrowthChart = growthChart;

}
