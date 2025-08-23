import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { recentOrder } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-recent-orders',
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './recent-orders.html',
  styleUrl: './recent-orders.scss',
})
export class RecentOrders {
  public recentOrder = recentOrder;
}
