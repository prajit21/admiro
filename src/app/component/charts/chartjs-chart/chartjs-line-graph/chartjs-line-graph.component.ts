import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs-line-graph',
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
