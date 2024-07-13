import { Component } from '@angular/core';
import { commonBorderPositionCardData } from '../../../../shared/data/bonus-ui/creative-cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-border-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-border-card.component.html',
  styleUrl: './common-border-card.component.scss'
})
export class CommonBorderCardComponent {

  public Data = commonBorderPositionCardData;

}
