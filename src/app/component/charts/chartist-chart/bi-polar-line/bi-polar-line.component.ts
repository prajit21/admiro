import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-bi-polar-line',
    imports: [CommonModule, ChartistModule],
    templateUrl: './bi-polar-line.component.html',
    styleUrl: './bi-polar-line.component.scss'
})
export class BiPolarLineComponent {

  public chart4 = chartData.chart4;

}
