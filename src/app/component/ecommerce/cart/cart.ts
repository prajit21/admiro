import { Component } from '@angular/core';
import { cartItem } from '../../../shared/data/ecommerce/cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-cart',
    imports: [CommonModule, RouterModule, Feathericon],
    templateUrl: './cart.html',
    styleUrl: './cart.scss'
})
export class Cart {

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
