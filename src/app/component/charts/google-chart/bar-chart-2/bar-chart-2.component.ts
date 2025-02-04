import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-bar-chart-2',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './bar-chart-2.component.html',
    styleUrl: './bar-chart-2.component.scss'
})
export class BarChart2Component {

  public barChart2 = chartData.barChart2;

}
