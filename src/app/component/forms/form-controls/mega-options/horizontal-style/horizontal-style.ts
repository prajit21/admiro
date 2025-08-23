import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { HorizontalStylelDelivery } from '../../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-horizontal-style',
  imports: [CommonModule],
  templateUrl: './horizontal-style.html',
  styleUrl: './horizontal-style.scss',
})
export class HorizontalStyle {
  public config = inject(NgbRatingConfig);

  public horizontalStyleData = HorizontalStylelDelivery;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
