import { Component } from '@angular/core';
import { SchoolPerformance } from '../../../../shared/data/dashboard/education/education-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-school-performance',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './school-performance.component.html',
  styleUrl: './school-performance.component.scss'
})
export class SchoolPerformanceComponent {

  public schoolPerformance = SchoolPerformance;

}
