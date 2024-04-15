import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-value-chart',
  templateUrl: './common-value-chart.component.html',
  styleUrl: './common-value-chart.component.scss'
})
export class CommonValueChartComponent {

  @Input() data: any

}
