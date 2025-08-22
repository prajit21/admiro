import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pie-chart-1',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './pie-chart-1.html',
    styleUrl: './pie-chart-1.scss'
})
export class PieChart1 {

  public pieChart1 = chartData.pieChart1;

}
