import { Component } from '@angular/core';
import * as commonchat from '../../../../shared/data/widgets/general/general-chart';
import { commonDetails } from '../../../../shared/data/widgets/general/general';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrl: './customers-details.component.scss'
})
export class CustomersDetailsComponent {

  public commonitem = commonDetails;
  public profitcharts = commonchat.DataChart;
  public oderchats = commonchat.OrderDatachart;



}
