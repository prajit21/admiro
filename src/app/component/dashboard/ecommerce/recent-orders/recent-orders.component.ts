import { Component } from '@angular/core';
import { recentOrder } from '../../../../shared/data/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent {
  
  public recentOrder = recentOrder;

}
