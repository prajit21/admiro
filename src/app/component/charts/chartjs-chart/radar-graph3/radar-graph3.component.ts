import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-radar-graph3',
  templateUrl: './radar-graph3.component.html',
  styleUrl: './radar-graph3.component.scss'
})
export class RadarGraph3Component {

  public radarLabels = chartData.RadarGraph3Labels;
  public radarData = chartData.RadarGraph3Data;
  public radarType = chartData.RadarGraph3Type;
  public radarOptions = chartData.RadarGraph3Options;

}
