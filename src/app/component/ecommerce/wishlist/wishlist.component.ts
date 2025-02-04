import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { whislist } from '../../../shared/data/ecommerce/wishlist';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, RouterModule],
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  public WishistData = whislist;

  constructor(public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

}
