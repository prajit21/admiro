import { Component } from '@angular/core';
import { growthChart } from '../../../../shared/data/dashboard/default/default-charts';

@Component({
  selector: 'app-monthly-revenue-growth',
  templateUrl: './monthly-revenue-growth.component.html',
  styleUrl: './monthly-revenue-growth.component.scss'
})
export class MonthlyRevenueGrowthComponent {

  public GrowthChart = growthChart;


}
