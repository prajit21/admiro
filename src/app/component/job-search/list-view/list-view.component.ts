import { Component } from '@angular/core';
import { jobcardsListView } from '../../../shared/data/job-search/job-search';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-view',
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
