import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { jobcardsDetails } from '../../../../shared/data/job-search/job-search';

@Component({
    selector: 'app-similar-jobs',
    imports: [CommonModule, NgbModule],
    templateUrl: './similar-jobs.component.html',
    styleUrl: './similar-jobs.component.scss'
})
export class SimilarJobsComponent {

  public jobCardsData = jobcardsDetails;
  public rating = 3;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }


}
