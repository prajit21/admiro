import { Component } from '@angular/core';
import { Assignments } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent {

  public Assignment = Assignments;

}
