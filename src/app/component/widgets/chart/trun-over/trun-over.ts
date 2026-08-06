import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Turnover } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-trun-over',
  imports: [NgApexchartsModule],
  templateUrl: './trun-over.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './trun-over.scss',
})
export class TrunOver {
  public TurnOverChart = Turnover;
}
