import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-widgets-chart',
  templateUrl: './common-widgets-chart.component.html',
  styleUrl: './common-widgets-chart.component.scss'
})
export class CommonWidgetsChartComponent {

  @Input() data :any

}
