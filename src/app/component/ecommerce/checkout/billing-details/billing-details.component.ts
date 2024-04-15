import { Component } from '@angular/core';
import { BecomeMember } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.scss'
})
export class BillingDetailsComponent {

  public becomememberData = BecomeMember;

}
