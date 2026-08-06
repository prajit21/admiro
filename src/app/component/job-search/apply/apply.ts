import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ApplyForm } from './apply-form/apply-form';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-apply',
  imports: [ApplyForm, JobFilter],
  templateUrl: './apply.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './apply.scss',
})
export class Apply {}
