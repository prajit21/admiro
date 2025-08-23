import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Turnover } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-trun-over',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './trun-over.html',
  styleUrl: './trun-over.scss',
})
export class TrunOver {
  public TurnOverChart = Turnover;
}
