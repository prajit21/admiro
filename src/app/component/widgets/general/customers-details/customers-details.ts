import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { commonDetails } from '../../../../shared/data/widgets/general/general';
import * as commonchat from '../../../../shared/data/widgets/general/general-chart';

@Component({
  selector: 'app-customers-details',
  imports: [NgApexchartsModule],
  templateUrl: './customers-details.html',
  styleUrl: './customers-details.scss',
})
export class CustomersDetails {
  public commonitem = commonDetails;
  public profitcharts = commonchat.DataChart;
  public oderchats = commonchat.OrderDatachart;
}
