import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { orderstatus } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-order-status2',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './order-status2.html',
    styleUrl: './order-status2.scss'
})
export class OrderStatus2 {

  public orderStatusData = orderstatus;

}
