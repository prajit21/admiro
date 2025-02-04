import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-holes-in-data',
    imports: [CommonModule, ChartistModule],
    templateUrl: './holes-in-data.component.html',
    styleUrl: './holes-in-data.component.scss'
})
export class HolesInDataComponent {

  public chart11 = chartData.chart11;

}
