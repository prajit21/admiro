import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart-4',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './pie-chart-4.component.html',
    styleUrl: './pie-chart-4.component.scss'
})
export class PieChart4Component {

  public pieChart4 = chartData.pieChart4;

}
