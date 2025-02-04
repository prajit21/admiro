import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jobcardsListView } from '../../../shared/data/job-search/job-search';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
    selector: 'app-list-view',
    imports: [CommonModule, NgbModule, JobFilterComponent],
    templateUrl: './list-view.component.html',
    styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

  public jobcardsListView = jobcardsListView;
  public rating = 5;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
