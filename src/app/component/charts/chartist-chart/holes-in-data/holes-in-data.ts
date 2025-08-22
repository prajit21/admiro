import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-holes-in-data',
    imports: [CommonModule, ChartistModule],
    templateUrl: './holes-in-data.html',
    styleUrl: './holes-in-data.scss'
})
export class HolesInData {

  public chart11 = chartData.chart11;

}
