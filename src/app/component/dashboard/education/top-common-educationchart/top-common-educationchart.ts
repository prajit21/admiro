import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { EducationChart } from '../../../../shared/data/dashboard/education/education-chart';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-top-common-educationchart',
  imports: [ClickOutsideDirective, NgApexchartsModule],
  templateUrl: './top-common-educationchart.html',
  styleUrl: './top-common-educationchart.scss',
})
export class TopCommonEducationchart {
  readonly data = input<EducationChart>();

  public isopen: boolean = false;

  open() {
    this.isopen = !this.isopen;
  }

  clickOutside(): void {
    this.isopen = false;
  }
}
