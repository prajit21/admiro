import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-google-line-chart',
  standalone: true,
  imports: [CommonModule, Ng2GoogleChartsModule],
  templateUrl: './google-line-chart.component.html',
  styleUrl: './google-line-chart.component.scss'
})
export class GoogleLineChartComponent {

  public lineChart = chartData.lineChart;

}
