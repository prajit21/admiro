import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-apex-column-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './apex-column-chart.component.html',
  styleUrl: './apex-column-chart.component.scss'
})
export class ApexColumnChartComponent {

  public columnChart2 = chartData.columnChart2;

}
