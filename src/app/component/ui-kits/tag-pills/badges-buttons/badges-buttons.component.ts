import { Component } from '@angular/core';
import { BadgePartButtons } from '../../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-badges-buttons',
  templateUrl: './badges-buttons.component.html',
  styleUrl: './badges-buttons.component.scss'
})
export class BadgesButtonsComponent {

  public buttonspartData = BadgePartButtons;

}
