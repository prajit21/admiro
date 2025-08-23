import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgApexchartsModule } from 'ng-apexcharts';

import { sellingchart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-selling-chart',
  imports: [CommonModule, NgApexchartsModule, RouterModule],
  templateUrl: './selling-chart.html',
  styleUrl: './selling-chart.scss',
})
export class SellingChart {
  public sellingChart = sellingchart;
}
