import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BecomeMembers } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-billing-details',
  imports: [],
  templateUrl: './billing-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './billing-details.scss',
})
export class BillingDetails {
  public becomememberData = BecomeMembers;
}
