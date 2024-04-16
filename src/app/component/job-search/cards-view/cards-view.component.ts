import { Component } from '@angular/core';
import { jobCardviewData } from '../../../shared/data/job-search/job-search';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrl: './cards-view.component.scss'
})
export class CardsViewComponent {

  public jobCardsData = jobCardviewData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
