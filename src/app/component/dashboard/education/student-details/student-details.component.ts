import { Component } from '@angular/core';
import { StudentDetails } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {

  public studentDeatils = StudentDetails;

}
