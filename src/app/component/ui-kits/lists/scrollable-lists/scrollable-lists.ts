import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ScrollableList } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-scrollable-lists',
  imports: [CommonModule],
  templateUrl: './scrollable-lists.html',
  styleUrl: './scrollable-lists.scss',
})
export class ScrollableLists {
  public scrollableData = ScrollableList;
}
