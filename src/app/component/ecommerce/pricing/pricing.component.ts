import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { SimplePricingCardComponent } from './simple-pricing-card/simple-pricing-card.component';

@Component({
    selector: 'app-pricing',
    imports: [CommonModule, BecomeMemberComponent, SimplePricingCardComponent],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss'
})
export class PricingComponent {

}
