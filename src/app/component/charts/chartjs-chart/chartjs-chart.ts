import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ChartjsBarChart } from './chartjs-bar-chart/chartjs-bar-chart';
import { ChartjsDoughnutChart } from './chartjs-doughnut-chart/chartjs-doughnut-chart';
import { ChartjsLineChart } from './chartjs-line-chart/chartjs-line-chart';
import { ChartjsLineGraph } from './chartjs-line-graph/chartjs-line-graph';
import { ChartjsPolarChart } from './chartjs-polar-chart/chartjs-polar-chart';
import { RadarGraph } from './radar-graph/radar-graph';

@Component({
  selector: 'app-chartjs-chart',
  imports: [
    CommonModule,
    ChartjsBarChart,
    ChartjsDoughnutChart,
    ChartjsLineChart,
    ChartjsLineGraph,
    ChartjsPolarChart,
    RadarGraph,
  ],
  templateUrl: './chartjs-chart.html',
  styleUrl: './chartjs-chart.scss',
})
export class ChartjsChart {}
