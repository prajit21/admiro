import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart-2',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './pie-chart-2.component.html',
    styleUrl: './pie-chart-2.component.scss'
})
export class PieChart2Component {

  public pieChart2 = chartData.pieChart2;

}
