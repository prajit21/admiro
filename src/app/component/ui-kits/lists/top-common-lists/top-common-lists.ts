import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { topcommonlists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-top-common-lists',
  imports: [CommonModule],
  templateUrl: './top-common-lists.html',
  styleUrl: './top-common-lists.scss',
})
export class TopCommonLists {
  public commonLists = topcommonlists;
}
