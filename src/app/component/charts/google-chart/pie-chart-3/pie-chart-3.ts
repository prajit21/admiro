import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pie-chart-3',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './pie-chart-3.html',
    styleUrl: './pie-chart-3.scss'
})
export class PieChart3 {

  public pieChart3 = chartData.pieChart3;

}
