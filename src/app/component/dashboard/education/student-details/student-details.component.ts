import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentDetails } from '../../../../shared/data/dashboard/education/education';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {

  public studentDeatils = StudentDetails;

}
