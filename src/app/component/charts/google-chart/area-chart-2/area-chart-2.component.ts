import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-area-chart-2',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './area-chart-2.component.html',
    styleUrl: './area-chart-2.component.scss'
})
export class AreaChart2Component {

  public areaChart2 = chartData.areaChart2;

}
