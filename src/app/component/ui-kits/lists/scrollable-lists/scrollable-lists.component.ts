import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollableLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-scrollable-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrollable-lists.component.html',
  styleUrl: './scrollable-lists.component.scss'
})
export class ScrollableListsComponent {

  public scrollableData = ScrollableLists;

}
