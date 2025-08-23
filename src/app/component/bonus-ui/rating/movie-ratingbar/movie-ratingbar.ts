import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-movie-ratingbar',
  imports: [CommonModule, BarRatingModule],
  templateUrl: './movie-ratingbar.html',
  styleUrl: './movie-ratingbar.scss',
})
export class MovieRatingbar {
  public movieRate = 2;
}
