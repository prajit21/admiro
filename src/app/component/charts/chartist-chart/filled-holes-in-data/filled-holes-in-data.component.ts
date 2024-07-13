import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-filled-holes-in-data',
  standalone: true,
  imports: [CommonModule, ChartistModule],
  templateUrl: './filled-holes-in-data.component.html',
  styleUrl: './filled-holes-in-data.component.scss'
})
export class FilledHolesInDataComponent {

  public chart12 = chartData.chart12;

}
