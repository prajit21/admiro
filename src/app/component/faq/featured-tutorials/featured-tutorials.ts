import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { featuredTutorial } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-featured-tutorials',
  imports: [NgbModule],
  templateUrl: './featured-tutorials.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './featured-tutorials.scss',
})
export class FeaturedTutorials {
  public config = inject(NgbRatingConfig);

  readonly data = input<featuredTutorial[]>();

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
