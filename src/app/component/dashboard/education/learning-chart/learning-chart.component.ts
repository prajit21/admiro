import { Component } from '@angular/core';
import { Learningchart } from '../../../../shared/data/dashboard/education/education-chart';

@Component({
  selector: 'app-learning-chart',
  templateUrl: './learning-chart.component.html',
  styleUrl: './learning-chart.component.scss'
})
export class LearningChartComponent {

  public learningChart = Learningchart;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }


}
