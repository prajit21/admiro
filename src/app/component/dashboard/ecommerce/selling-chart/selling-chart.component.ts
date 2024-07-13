import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sellingchart } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selling-chart',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,RouterModule],
  templateUrl: './selling-chart.component.html',
  styleUrl: './selling-chart.component.scss'
})
export class SellingChartComponent {

  public sellingChart = sellingchart;

}
