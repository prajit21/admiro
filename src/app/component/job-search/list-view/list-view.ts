import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { jobcardsListView } from '../../../shared/data/job-search/job-search';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { JobFilter } from '../job-filter/job-filter';

@Component({
    selector: 'app-list-view',
    imports: [CommonModule, NgbModule, JobFilter],
    templateUrl: './list-view.html',
    styleUrl: './list-view.scss'
})
export class ListView {

  public config = inject(NgbRatingConfig);

  public jobcardsListView = jobcardsListView;
  public rating = 5;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

}
