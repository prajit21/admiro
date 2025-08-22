import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentDetail } from '../../../../shared/data/dashboard/education/education';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-student-details',
    imports: [CommonModule, RouterModule],
    templateUrl: './student-details.html',
    styleUrl: './student-details.scss'
})
export class StudentDetails {

  public studentDeatils = StudentDetail;

}
