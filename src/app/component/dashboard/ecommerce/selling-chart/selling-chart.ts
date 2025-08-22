import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sellingchart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-selling-chart',
    imports: [CommonModule, NgApexchartsModule, RouterModule],
    templateUrl: './selling-chart.html',
    styleUrl: './selling-chart.scss'
})
export class SellingChart {

  public sellingChart = sellingchart;

}
