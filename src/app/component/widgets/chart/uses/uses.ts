import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { uses } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-uses',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './uses.html',
  styleUrl: './uses.scss',
})
export class Uses {
  public userData = uses;
}
