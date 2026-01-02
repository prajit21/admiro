import { SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { jobcardsDetails } from '../../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-similar-jobs',
  imports: [NgbModule, SlicePipe],
  templateUrl: './similar-jobs.html',
  styleUrl: './similar-jobs.scss',
})
export class SimilarJobs {
  public config = inject(NgbRatingConfig);

  public jobCardsData = jobcardsDetails;
  public rating = 3;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
