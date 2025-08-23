import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BecomeMembers } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-billing-details',
  imports: [CommonModule],
  templateUrl: './billing-details.html',
  styleUrl: './billing-details.scss',
})
export class BillingDetails {
  public becomememberData = BecomeMembers;
}
