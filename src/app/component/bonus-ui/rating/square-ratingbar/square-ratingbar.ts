import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-square-ratingbar',
  imports: [BarRatingModule],
  templateUrl: './square-ratingbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './square-ratingbar.scss',
})
export class SquareRatingbar {
  public squareRate = 1;
}
