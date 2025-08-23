import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { commonBorderPositionCardData } from '../../../../shared/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-border-card',
  imports: [CommonModule],
  templateUrl: './common-border-card.html',
  styleUrl: './common-border-card.scss',
})
export class CommonBorderCard {
  public Data = commonBorderPositionCardData;
}
