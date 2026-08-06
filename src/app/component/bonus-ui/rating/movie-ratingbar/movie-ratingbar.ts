import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-movie-ratingbar',
  imports: [BarRatingModule],
  templateUrl: './movie-ratingbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './movie-ratingbar.scss',
})
export class MovieRatingbar {
  public movieRate = 2;
}
