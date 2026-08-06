import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { HorizontalStylelDelivery } from '../../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-horizontal-style',
  imports: [],
  templateUrl: './horizontal-style.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
