import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-star-ratingbar',
  standalone: true,
  imports: [CommonModule, BarRatingModule],
  templateUrl: './star-ratingbar.component.html',
  styleUrl: './star-ratingbar.component.scss'
})
export class StarRatingbarComponent {
  
  public cssRate = 1;

}
