import { Component } from '@angular/core';
import { cartItem } from '../../../shared/data/ecommerce/cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-cart',
    imports: [CommonModule, RouterModule, FeathericonComponent],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {

  public cartData = cartItem;

  decrement(id: number) {
    if (this.cartData[id - 1].counter > 1) {
      this.cartData[id - 1].counter -= 1;
    }
  }

  increment(id: number) {
    this.cartData[id - 1].counter += 1;
  }

}
