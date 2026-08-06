import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { jobCardviewData } from '../../../shared/data/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-cards-view',
  imports: [JobFilter, NgbModule],
  templateUrl: './cards-view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cards-view.scss',
})
export class CardsView {
  public config = inject(NgbRatingConfig);

  public jobCardsData = jobCardviewData;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
