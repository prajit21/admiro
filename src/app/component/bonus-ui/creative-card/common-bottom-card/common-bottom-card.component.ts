import { Component } from '@angular/core';
import { commonAbsoluteCardData } from '../../../../shared/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-bottom-card',
  templateUrl: './common-bottom-card.component.html',
  styleUrl: './common-bottom-card.component.scss'
})
export class CommonBottomCardComponent {

  public commonData = commonAbsoluteCardData;

}
