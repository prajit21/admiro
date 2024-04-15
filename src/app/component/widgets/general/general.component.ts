import { Component } from '@angular/core';
import { salesvaluechart, visitorchart } from '../../../shared/data/dashboard/ecommerce/ecommerce-chart';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

  public visitorChart = visitorchart;
  public salesValueChart = salesvaluechart;

}
