import { Component, ChangeDetectionStrategy } from '@angular/core';

import { JobTodays } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-job-today',
  imports: [],
  templateUrl: './job-today.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './job-today.scss',
})
export class JobToday {
  public jobDetails = JobTodays;
}
