import { Component } from '@angular/core';
import { JobToday } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-job-today',
  templateUrl: './job-today.component.html',
  styleUrl: './job-today.component.scss'
})
export class JobTodayComponent {

  public jobDetails = JobToday;

}
