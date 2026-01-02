
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Assignment } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-assignments',
  imports: [RouterModule],
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss',
})
export class Assignments {
  public Assignment = Assignment;
}
