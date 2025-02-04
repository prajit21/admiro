import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HorizontalStylelDelivery  } from '../../../../../shared/data/form-controls/mega-options';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-horizontal-style',
    imports: [CommonModule],
    templateUrl: './horizontal-style.component.html',
    styleUrl: './horizontal-style.component.scss'
})
export class HorizontalStyleComponent {

  public horizontalStyleData = HorizontalStylelDelivery;
 

  constructor( public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

}
