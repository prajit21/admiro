import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dount-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './dount-chart.component.html',
  styleUrl: './dount-chart.component.scss'
})
export class DountChartComponent {

  public donutChart = chartData.donutChart;

}
