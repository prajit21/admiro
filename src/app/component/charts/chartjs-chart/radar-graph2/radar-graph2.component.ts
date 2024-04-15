import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-radar-graph2',
  templateUrl: './radar-graph2.component.html',
  styleUrl: './radar-graph2.component.scss'
})
export class RadarGraph2Component {

  public radarGraph2Options = chartData.radarGraph2Options;
  public radarGraph2Labels = chartData.radarGraph2Labels;
  public radarGraph2Type = chartData.radarGraph2Type;
  public radarGraph2Data = chartData.radarGraph2Data;

}
