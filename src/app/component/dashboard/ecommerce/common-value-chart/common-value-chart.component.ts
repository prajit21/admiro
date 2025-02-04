import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-common-value-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './common-value-chart.component.html',
    styleUrl: './common-value-chart.component.scss'
})
export class CommonValueChartComponent {

  @Input() data: any

}
