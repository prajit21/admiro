import { Component } from '@angular/core';
import { ordersHistory } from '../../../../shared/data/ecommerce/orderhistory';

@Component({
  selector: 'app-orders-data',
  templateUrl: './orders-data.component.html',
  styleUrl: './orders-data.component.scss'
})
export class OrdersDataComponent {

  public orderHistory = ordersHistory;

  cancelOrder(index: number, id: number) {
    this.orderHistory.forEach((data) => {
      data.data.forEach((element) => {
        if (element.id == id) {
          data.data.splice(index, 1);
        }
      });
    });
  }

}
