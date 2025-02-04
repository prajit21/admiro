import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartjsBarChartComponent } from './chartjs-bar-chart/chartjs-bar-chart.component';
import { ChartjsDoughnutChartComponent } from './chartjs-doughnut-chart/chartjs-doughnut-chart.component';
import { ChartjsLineChartComponent } from './chartjs-line-chart/chartjs-line-chart.component';
import { ChartjsLineGraphComponent } from './chartjs-line-graph/chartjs-line-graph.component';
import { ChartjsPolarChartComponent } from './chartjs-polar-chart/chartjs-polar-chart.component';
import { RadarGraphComponent } from './radar-graph/radar-graph.component';

@Component({
    selector: 'app-chartjs-chart',
    imports: [CommonModule, ChartjsBarChartComponent, ChartjsDoughnutChartComponent, ChartjsLineChartComponent,
        ChartjsLineGraphComponent, ChartjsPolarChartComponent, RadarGraphComponent],
    templateUrl: './chartjs-chart.component.html',
    styleUrl: './chartjs-chart.component.scss'
})
export class ChartjsChartComponent {

}
