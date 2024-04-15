import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-radar-graph',
  templateUrl: './radar-graph.component.html',
  styleUrl: './radar-graph.component.scss'
})
export class RadarGraphComponent {

  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphData = chartData.radarGraphData;

}
