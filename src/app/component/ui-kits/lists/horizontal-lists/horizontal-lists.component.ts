import { Component } from '@angular/core';
import { HorizontalLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-horizontal-lists',
  templateUrl: './horizontal-lists.component.html',
  styleUrl: './horizontal-lists.component.scss'
})
export class HorizontalListsComponent {

  public HorizontalData = HorizontalLists;

}
