import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jobDetail } from '../../../shared/data/job-search/job-search';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { SimilarJobsComponent } from './similar-jobs/similar-jobs.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, JobFilterComponent, SimilarJobsComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  public jobDetail = jobDetail;

}
