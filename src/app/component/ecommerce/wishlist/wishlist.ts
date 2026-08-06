import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { whislist } from '../../../shared/data/ecommerce/wishlist';

@Component({
  selector: 'app-wishlist',
  imports: [RouterModule],
  templateUrl: './wishlist.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './wishlist.scss',
})
export class Wishlist {
  public config = inject(NgbRatingConfig);

  public WishistData = whislist;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
