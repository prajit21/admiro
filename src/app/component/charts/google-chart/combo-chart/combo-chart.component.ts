import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-combo-chart',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './combo-chart.component.html',
    styleUrl: './combo-chart.component.scss'
})
export class ComboChartComponent {

  public comboChart = chartData.comboChart;

}
