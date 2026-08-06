import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentDetail } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-student-details',
  imports: [RouterModule],
  templateUrl: './student-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './student-details.scss',
})
export class StudentDetails {
  public studentDeatils = StudentDetail;
}
