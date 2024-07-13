import { Component } from '@angular/core';
import { EarningsTrend } from '../../../../shared/data/dashboard/default/default-charts';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-earning-trend',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './earning-trend.component.html',
  styleUrl: './earning-trend.component.scss'
})
export class EarningTrendComponent {

  public earningChart = EarningsTrend;

  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
