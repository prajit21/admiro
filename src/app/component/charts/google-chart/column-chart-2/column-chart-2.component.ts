import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-column-chart-2',
  standalone: true,
  imports: [CommonModule, Ng2GoogleChartsModule],
  templateUrl: './column-chart-2.component.html',
  styleUrl: './column-chart-2.component.scss'
})
export class ColumnChart2Component {

  public columnChart2 = chartData.columnChart2;


}
