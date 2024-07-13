import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-basic-line-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './basic-line-chart.component.html',
  styleUrl: './basic-line-chart.component.scss'
})
export class BasicLineChartComponent {

  public areaChart = chartData.basicAreachart;

}
