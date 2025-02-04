import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { recentOrder } from '../../../../shared/data/dashboard/ecommerce/ecommerce';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-recent-orders',
    imports: [CommonModule, CarouselModule, RouterModule],
    templateUrl: './recent-orders.component.html',
    styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent {
  
  public recentOrder = recentOrder;

}
