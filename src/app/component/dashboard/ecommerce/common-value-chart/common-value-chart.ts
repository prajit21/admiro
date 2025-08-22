import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-common-value-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './common-value-chart.html',
    styleUrl: './common-value-chart.scss'
})
export class CommonValueChart {

  readonly data = input<any>();

}
