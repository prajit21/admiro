import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-area-chart-1',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './area-chart-1.html',
    styleUrl: './area-chart-1.scss'
})
export class AreaChart1 {

  public areaChart1 = chartData.areaChart1

}
