import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist-chart';

@Component({
  selector: 'app-holes-in-data',
  templateUrl: './holes-in-data.component.html',
  styleUrl: './holes-in-data.component.scss'
})
export class HolesInDataComponent {

  public chart11 = chartData.chart11;

}
