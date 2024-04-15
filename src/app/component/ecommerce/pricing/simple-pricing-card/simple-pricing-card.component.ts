import { Component } from '@angular/core';
import { simplePricingCard } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-simple-pricing-card',
  templateUrl: './simple-pricing-card.component.html',
  styleUrl: './simple-pricing-card.component.scss'
})
export class SimplePricingCardComponent {

  public simplepricing = simplePricingCard;

}
