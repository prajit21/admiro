import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jobCardviewData } from '../../../shared/data/job-search/job-search';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
  selector: 'app-cards-view',
  standalone: true,
  imports: [CommonModule, JobFilterComponent, NgbModule],
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
