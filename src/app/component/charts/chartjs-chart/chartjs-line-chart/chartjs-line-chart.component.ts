import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-line-chart',
  templateUrl: './chartjs-line-chart.component.html',
  styleUrl: './chartjs-line-chart.component.scss'
})
export class ChartjsLineChartComponent {


  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

}
