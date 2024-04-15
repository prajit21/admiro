import { Component } from '@angular/core';
import { orderstatus } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-order-status2',
  templateUrl: './order-status2.component.html',
  styleUrl: './order-status2.component.scss'
})
export class OrderStatus2Component {

  public orderStatusData = orderstatus;

}
