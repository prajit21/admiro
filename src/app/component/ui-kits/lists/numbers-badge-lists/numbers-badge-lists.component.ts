import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberedBadgeLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-numbers-badge-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numbers-badge-lists.component.html',
  styleUrl: './numbers-badge-lists.component.scss'
})
export class NumbersBadgeListsComponent {

  public NumberedBadgeData = NumberedBadgeLists;

}
