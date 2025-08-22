import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LiveProductsChart } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-live-products',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './live-products.html',
    styleUrl: './live-products.scss'
})
export class LiveProducts {

  public LiveProductChart = LiveProductsChart;

}
