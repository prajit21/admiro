import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Assignments } from '../../../../shared/data/dashboard/education/education';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-assignments',
    imports: [CommonModule, RouterModule],
    templateUrl: './assignments.component.html',
    styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent {

  public Assignment = Assignments;

}
