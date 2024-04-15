import { Component } from '@angular/core';
import { commonTopCard } from '../../../../shared/data/bonus-ui/basic-card';

@Component({
  selector: 'app-top-common-card',
  templateUrl: './top-common-card.component.html',
  styleUrl: './top-common-card.component.scss'
})
export class TopCommonCardComponent {

  public topCardData = commonTopCard;

}
