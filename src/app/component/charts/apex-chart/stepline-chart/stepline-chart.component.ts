import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-stepline-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './stepline-chart.component.html',
  styleUrl: './stepline-chart.component.scss'
})
export class SteplineChartComponent {

  public steplineChart = chartData.steplineChart;

}
