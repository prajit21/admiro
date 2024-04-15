import { Component } from '@angular/core';
import { topcommonlists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-top-common-lists',
  templateUrl: './top-common-lists.component.html',
  styleUrl: './top-common-lists.component.scss'
})
export class TopCommonListsComponent {

  public commonLists = topcommonlists;

}
