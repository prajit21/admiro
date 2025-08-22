import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MonthlySalesChart } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-monthly-sales',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './monthly-sales.html',
    styleUrl: './monthly-sales.scss'
})
export class MonthlySales {

  public MonthlySalesChart = MonthlySalesChart;

}
