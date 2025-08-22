import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-common-widgets-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './common-widgets-chart.html',
    styleUrl: './common-widgets-chart.scss'
})
export class CommonWidgetsChart {

  readonly data = input<any>();

}
