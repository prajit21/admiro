import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-radial-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './radial-chart.component.html',
  styleUrl: './radial-chart.component.scss'
})
export class RadialChartComponent {

  public radialBarChart = chartData.radialBarChart;

}
