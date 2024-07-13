import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BecomeMember } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-billing-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.scss'
})
export class BillingDetailsComponent {

  public becomememberData = BecomeMember;

}
