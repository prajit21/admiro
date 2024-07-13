import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-bi-polar-bar-chart',
  standalone: true,
  imports: [CommonModule, ChartistModule],
  templateUrl: './bi-polar-bar-chart.component.html',
  styleUrl: './bi-polar-bar-chart.component.scss'
})
export class BiPolarBarChartComponent {

  public chart6 = chartData.chart6;


}
