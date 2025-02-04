import { Component } from '@angular/core';
import { JobToday } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-job-today',
    imports: [CommonModule],
    templateUrl: './job-today.component.html',
    styleUrl: './job-today.component.scss'
})
export class JobTodayComponent {

  public jobDetails = JobToday;

}
