import { Component } from '@angular/core';
import { growthChart } from '../../../../shared/data/dashboard/default/default-charts';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-monthly-revenue-growth',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './monthly-revenue-growth.html',
    styleUrl: './monthly-revenue-growth.scss'
})
export class MonthlyRevenueGrowth {

  public GrowthChart = growthChart;

  public openTab: string = "Weekly";

  tab(value: string) {
    this.openTab = value
  }

}
