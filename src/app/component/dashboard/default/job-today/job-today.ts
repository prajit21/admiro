import { Component } from '@angular/core';
import { JobTodays } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-job-today',
    imports: [CommonModule],
    templateUrl: './job-today.html',
    styleUrl: './job-today.scss'
})
export class JobToday {

  public jobDetails = JobTodays;

}
