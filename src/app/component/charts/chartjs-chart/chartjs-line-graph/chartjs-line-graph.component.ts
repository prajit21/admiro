import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartjs-line-graph',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chartjs-line-graph.component.html',
  styleUrl: './chartjs-line-graph.component.scss'
})
export class ChartjsLineGraphComponent {

  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;

}
