import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, ApplyFormComponent, JobFilterComponent],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.scss'
})
export class ApplyComponent {

}
