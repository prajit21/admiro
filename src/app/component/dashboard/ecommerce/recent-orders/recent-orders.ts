import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { recentOrder } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-recent-orders',
  imports: [CarouselModule, RouterModule],
  templateUrl: './recent-orders.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './recent-orders.scss',
})
export class RecentOrders {
  public recentOrder = recentOrder;
}
