import { Component } from '@angular/core';
import { EarningsTrend } from '../../../../shared/data/dashboard/default/default-charts';

@Component({
  selector: 'app-earning-trend',
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
