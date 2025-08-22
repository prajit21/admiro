import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-bi-polar-bar-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './bi-polar-bar-chart.html',
    styleUrl: './bi-polar-bar-chart.scss'
})
export class BiPolarBarChart {

  public chart6 = chartData.chart6;


}
