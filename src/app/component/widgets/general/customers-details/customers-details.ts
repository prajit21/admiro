import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as commonchat from '../../../../shared/data/widgets/general/general-chart';
import { commonDetails } from '../../../../shared/data/widgets/general/general';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-customers-details',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './customers-details.html',
    styleUrl: './customers-details.scss'
})
export class CustomersDetails {

  public commonitem = commonDetails;
  public profitcharts = commonchat.DataChart;
  public oderchats = commonchat.OrderDatachart;



}
