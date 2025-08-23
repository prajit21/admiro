import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontal-ratingbar',
  imports: [CommonModule, BarRatingModule],
  templateUrl: './horizontal-ratingbar.html',
  styleUrl: './horizontal-ratingbar.scss',
})
export class HorizontalRatingbar {
  public verticalRate = 1;
}
