import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-apex-bar-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './apex-bar-chart.component.html',
  styleUrl: './apex-bar-chart.component.scss'
})
export class ApexBarChartComponent {

  public barChart = chartData.barChart;

}
