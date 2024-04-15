import { Component } from '@angular/core';
import { salesvaluechart, visitorchart } from '../../../shared/data/dashboard/ecommerce/ecommerce-chart';


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

  public salesValueChart = salesvaluechart;
  public visitorChart = visitorchart;
 

}
