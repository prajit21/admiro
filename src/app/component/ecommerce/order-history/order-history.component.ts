import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { OrdersDataComponent } from './orders-data/orders-data.component';
import { DatatableOrderHistoryComponent } from './datatable-order-history/datatable-order-history.component';

@Component({
    selector: 'app-order-history',
    imports: [CommonModule, OrdersDataComponent, DatatableOrderHistoryComponent],
    templateUrl: './order-history.component.html',
    styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {

}
