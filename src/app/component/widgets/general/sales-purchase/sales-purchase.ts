import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { commonData } from '../../../../shared/data/widgets/general/general';

@Component({
  selector: 'app-sales-purchase',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './sales-purchase.html',
  styleUrl: './sales-purchase.scss',
})
export class SalesPurchase {
  public commonData = commonData;
}
