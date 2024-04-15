import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { jobCardsData } from '../../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-similar-jobs',
  templateUrl: './similar-jobs.component.html',
  styleUrl: './similar-jobs.component.scss'
})
export class SimilarJobsComponent {

  public jobCardsData = jobCardsData;
  public rating = 3;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }


}
