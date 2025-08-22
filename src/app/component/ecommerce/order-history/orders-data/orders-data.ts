import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ordersHistory } from '../../../../shared/data/ecommerce/orderhistory';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-orders-data',
    imports: [CommonModule, Feathericon],
    templateUrl: './orders-data.html',
    styleUrl: './orders-data.scss'
})
export class OrdersData {

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
