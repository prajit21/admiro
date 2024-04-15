import { Component } from '@angular/core';
import { NumberedBadgeLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-numbers-badge-lists',
  templateUrl: './numbers-badge-lists.component.html',
  styleUrl: './numbers-badge-lists.component.scss'
})
export class NumbersBadgeListsComponent {

  public NumberedBadgeData = NumberedBadgeLists;

}
