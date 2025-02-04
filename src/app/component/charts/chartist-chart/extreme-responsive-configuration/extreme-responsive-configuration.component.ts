import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-extreme-responsive-configuration',
    imports: [CommonModule, ChartistModule],
    templateUrl: './extreme-responsive-configuration.component.html',
    styleUrl: './extreme-responsive-configuration.component.scss'
})
export class ExtremeResponsiveConfigurationComponent {

  public chart9 = chartData.chart9;


}
