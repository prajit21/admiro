import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { saleValue } from '../../../../shared/data/widgets/general/general-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-sale-value-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './sale-value-chart.html',
    styleUrl: './sale-value-chart.scss'
})
export class SaleValueChart {

  public salevalueChart = saleValue;

}
