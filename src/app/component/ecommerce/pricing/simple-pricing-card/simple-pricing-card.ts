import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { simplePricingCard } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-simple-pricing-card',
  imports: [CommonModule],
  templateUrl: './simple-pricing-card.html',
  styleUrl: './simple-pricing-card.scss',
})
export class SimplePricingCard {
  public simplepricing = simplePricingCard;
}
