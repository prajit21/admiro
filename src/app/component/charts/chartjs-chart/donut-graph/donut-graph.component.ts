import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrl: './donut-graph.component.scss'
})
export class DonutGraphComponent {

  public DontLabels = chartData.DonutLabels;
  public DontData = chartData.DonutData;
  public DontType = chartData.DonutType;
  public DontOptions = chartData.DonutOptions;

}
