import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BillingDetailsComponent } from './billing-details/billing-details.component';

@Component({
    selector: 'app-checkout',
    imports: [CommonModule, BillingDetailsComponent],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
