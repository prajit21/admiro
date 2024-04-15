import { Component } from '@angular/core';
import { educationchart1, educationchart2, educationchart3 } from '../../../shared/data/dashboard/education/education-chart';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {


  public educationchart1 = educationchart1;
  public educationchart2 = educationchart2;
  public educationchart3 = educationchart3;

}
