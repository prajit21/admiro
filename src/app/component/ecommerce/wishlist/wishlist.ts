import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { whislist } from '../../../shared/data/ecommerce/wishlist';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, RouterModule],
    templateUrl: './wishlist.html',
    styleUrl: './wishlist.scss'
})
export class Wishlist {

  public config = inject(NgbRatingConfig);

  public WishistData = whislist;

  constructor() {
    this.config.max = 5; this.config.readonly = true;
  }

}
