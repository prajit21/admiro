import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DisabledList } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-disabled-lists',
  imports: [CommonModule],
  templateUrl: './disabled-lists.html',
  styleUrl: './disabled-lists.scss',
})
export class DisabledLists {
  public disableData = DisabledList;
}
