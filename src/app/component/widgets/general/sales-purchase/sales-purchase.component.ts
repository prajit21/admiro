import { Component } from '@angular/core';
import { commonData } from '../../../../shared/data/widgets/general/general';

@Component({
  selector: 'app-sales-purchase',
  templateUrl: './sales-purchase.component.html',
  styleUrl: './sales-purchase.component.scss'
})
export class SalesPurchaseComponent {

  public commonData = commonData;

}
