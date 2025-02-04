import { Component } from '@angular/core';
import { growthChart } from '../../../../shared/data/dashboard/default/default-charts';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-monthly-revenue-growth',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './monthly-revenue-growth.component.html',
    styleUrl: './monthly-revenue-growth.component.scss'
})
export class MonthlyRevenueGrowthComponent {

  public GrowthChart = growthChart;

  public openTab: string = "Weekly";

  tab(value: string) {
    this.openTab = value
  }

}
