import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { orderstatus } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-order-status2',
  imports: [NgApexchartsModule],
  templateUrl: './order-status2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './order-status2.scss',
})
export class OrderStatus2 {
  public orderStatusData = orderstatus;
}
