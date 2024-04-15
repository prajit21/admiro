import { Component } from '@angular/core';
import {  whislist} from '../../../shared/data/ecommerce/wishlist';
import {  NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  public WishistData = whislist;

  constructor( public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

}
