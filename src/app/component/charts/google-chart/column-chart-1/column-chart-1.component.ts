import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-column-chart-1',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './column-chart-1.component.html',
    styleUrl: './column-chart-1.component.scss'
})
export class ColumnChart1Component {

  public columnChart1 = chartData.columnChart1;

}
