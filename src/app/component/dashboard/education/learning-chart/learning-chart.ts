import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Learningchart } from '../../../../shared/data/dashboard/education/education-chart';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-learning-chart',
    imports: [CommonModule, NgApexchartsModule, ClickOutsideDirective],
    templateUrl: './learning-chart.html',
    styleUrl: './learning-chart.scss'
})
export class LearningChart {

  public learningChart = Learningchart;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }


}
