import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Learningchart } from '../../../../shared/data/dashboard/education/education-chart';

@Component({
  selector: 'app-learning-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './learning-chart.component.html',
  styleUrl: './learning-chart.component.scss'
})
export class LearningChartComponent {

  public learningChart = Learningchart;

}
